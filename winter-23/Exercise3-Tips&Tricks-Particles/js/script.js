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

let randomVector;

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

    let pos = createVector(width/2, height/2);
    let mouse = createVector(mouseX, mouseY);
    
    let v = p5.Vector.sub(mouse, pos); // using the static function sub(), on the Vector class, to subtract two vectors and store the resulting vector in another variable.
   
    // manual normalization: and magnitude scaling:
    // let m = v.mag(); // Vector magnitude.
    // v.div(m); // divide vector by it's magnitude(aka length); making it 1.

    // v.normalize(); // make vector equal to a unit vector. Equivalent to dividing ot by it's magnitude.
    // v.mult(200); // multiply by a scalar value to give it a fixed length.

    // v.normalize().mult(50); // normalize and set magnitude by 'chaining' operations.

    v.setMag(300); // this normalizes and multiplies a vector by a scalar value.

    // v.normalize();
    push(); 
    translate(width/2, height/2)
    strokeWeight(4);
    stroke(255,80);
    line(0, 0, v.x, v.y);
    pop();

    radialVectors();  // Draw random vectors from the center of the screen.

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

function radialVectors() {
    push();
    translate(mouseX, mouseY);

    // let vec = createVector(random(-500, 500), random(-500, 500)); // Create random vector on square bounds
    let vec = p5.Vector.random2D(); // create random unit vector. Static function random2d returns a random vector of magnitude 1 (px). 
    vec.mult(random(100, 400)); //multiply unit vector by a scalar value 

    strokeWeight(4);
    stroke(255, 70);
    line(0, 0, vec.x, vec.y);
    pop();
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
        this.pos = createVector(x,y);
        this.vel = p5.Vector.random2D(); // create random unit vector.
        this.vel.mult(random(3)); // multiply the unit vector by a random scalar value from 0 to n.
    }

    displayAndMove() {
        push()
        fill(0);
        ellipse(this.pos.x, this.pos.y, 32);
        pop();

        var randNum = floor(random(4));
        
        this.pos.add(this.vel);
        // this.pos.x += this.vel.x;
        // this.pos.y += this.vel.y;

        // Switch statement incoming:
        // switch (randNum) {
        //     case 0:
        //         // move right:
        //         this.x += 1;
        //         break;
        //     case 1:
        //         // move left:
        //         this.x -= 1;
        //         break;
        //     case 2:
        //         // move down:
        //         this.y += 1;
        //         break;
        //     case 3:
        //         // move up:
        //         this.y -= 1;
        //         break;
        // }
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