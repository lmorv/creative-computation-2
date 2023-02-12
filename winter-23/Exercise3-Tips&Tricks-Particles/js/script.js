/**
Tips & Tricks for Particles
Leo Morales

Class exercise, and online explorations expanding on techniques to work with particle systems (Main source of knowledged being The Coding Train).

Questions: 
- what is the difference between let and var? What is the best practice on deciding which to use?

*/

"use strict";

let sparkle = [];

let randomWalker;

let xOffset1 = 0; // offset on the horizontal axis of the Perlin Noise space.
let xOffset2 = 10000;

let terrain = [];
let terrainNum = 3;
let terrain2;

let increment2d = 0.01; // increment used in 2d perlin noise visualization.

var x;
var y;

/**
Description of preload
*/
function preload() {
    
}

/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);

    randomWalker = new RandomWalker(width/2, height/2);

    pixelDensity(1); // Need this to properly use loadPixels() later, to account for monitors with high pixel density.
    // set up terrains:
    let bump = 0.002;
    let speed = 0.015;
    let start = 0;
    for (let i = 0; i < terrainNum; i++) {

        terrain[i] = new Terrain(bump, speed, start);
        speed += 0.0001;
        start += 1;
        bump -= 0.0004; 
    }
    // Lonely terrain instance:
    terrain2 = new Terrain(bump, speed + 0.01, start + 1);

}

/**
Description of draw()
*/
function draw() {
    
    let water = color(30,100,200);
    background(water);

    randomWalker.displayAndMove();

    // Perlin noise in 2 dimentions, pretty slow:
    // draw2dNoise();
    
    // Handle terrains:
    for (let i = 0; i < terrain.length; i++) {
        terrain[i].displayAndPan();
    }
    // another terrain all on it's own:
    terrain2.displayAndPan();

    // Handle wanderer:
    let wanderer = new Wanderer();
    wanderer.display();
    wanderer.move();
}

function draw2dNoise() {
    // draw 2d noise:
    // noiseDetail(80);
    var yOff = 0;
    loadPixels();
    for (var y = 0; y < height; y++) {
        var xOff = 0;
        for (let x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xOff, yOff) * 255;
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            xOff += increment2d;
        }
        yOff += increment2d;
    }
    updatePixels();
    // noloop();
}

class RandomWalker {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    displayAndMove() {
        push()
        stroke(255);
        strokeWeight(5);
        point(this.x, this.y);
        pop();

        var randNum = floor(random(4));

        // Switch statement incoming:
        switch (randNum) {
            case 0:
                // move right:
                this.x += 1;
                break;
            case 1:
                // move left:
                this.x -= 1;
                break;
            case 2:
                // move down:
                this.y += 1;
                break;
            case 3:
                // move up:
                this.y -= 1;
                break;
        }
    }
}

class Terrain {
    constructor(bump, speed, start) {
        this.increment = bump;  // 'Bumpy-ness' of the perlin noise wave. A step increment in perlin noise space
        this.timeIncrement = speed; // speed of panning.
        this.terrainStart = start; // start seed value for a newly created noise wave.
    }

    displayAndPan() {
        push();
        noFill();
        stroke(255);
        beginShape();

        let xOffset3 = this.terrainStart;  // declaring another offset in perlin space and immediately assigning it to the terrain start seed.
        for (let x = 0; x < width; x++) {

            let y = noise(xOffset3) * height;
            vertex(x, y);

            xOffset3 += this.increment;

        }

         endShape();
         this.terrainStart += this.timeIncrement;
         pop();
    }
}

class Wanderer {
    constructor() {
        this.x = map(noise(xOffset1), 0, 1, 0, width);
        this.y = map(noise(xOffset2), 0, 1, 0, height);

        this.speed = 0.01;
    }

    display() {
        push();
        noStroke();
        ellipse(this.x, this.y, 44, 40);
        pop();
    }

    move() {
        xOffset1 += this.speed;
        xOffset2 += this.speed;
    }
}

class Sparkle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.vel = p5.Vector.random2D();
        // this.vel.mult(random(1,5));
        this.acc = createVector(0,0);
        this.lifetime = 255;
        this.dim = 100;
    }
    
    display() {
        //display some shiny sparks
        noStroke();
        fill(255, 255, 10, this.lifetime);
        rectMode(CENTER);
        square(this.x,this.y, this.dim, 40, 0, 40, 0); // Square with some rounded corners.
    }

    update() {
        this.x = mouseX;
        this.y = mouseY;

        this.lifetime -= 0.5;
    }
}