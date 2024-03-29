
   /**
Tips & Tricks for Particles
Leo Morales

Class exercise, and online explorations expanding on techniques to work with particle systems (Main source of knowledged being The Coding Train).

Questions: 
- what is the difference between let and var? What is the best practice on deciding which to use?

*/

"use strict";

let sparkle = [];

let randomWalker = [];
let randomWalkNum = 20;

let randomVector;

let xOffset1 = 0; // offset on the horizontal axis of the Perlin Noise space.
let xOffset2 = 10000;

let terrain = [];
let terrainNum = 6;
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
  
	for (let i = 0; i < randomWalkNum; i++) {

        randomWalker[i] = new RandomWalker(width/2, height/2);
       
    }
     

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
    
    let water = color(100,100,200);
    background(water);

    compassLine(1000); // A vector pointing from the center of the canvas to the mouse. Takes an argument to set the magnitude.
    for (let i = 0; i < randomWalker.length; i++) {
    	randomWalker[i].displayAndMove();
    }
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

function compassLine(magnitude) {
    let pos = createVector(width/2, height/2);
    let mouse = createVector(mouseX, mouseY);
    
    let v = p5.Vector.sub(mouse, pos); // using the static function sub(), on the Vector class, to subtract two vectors and store the resulting vector in another variable.

    v.setMag(magnitude); // this normalizes and multiplies a vector by a scalar value.

    // v.normalize();
    push(); 
    translate(width/2, height/2)
    strokeWeight(2);
    stroke(255,80);
    line(0, 0, v.x, v.y);
    pop();

}

class RandomWalker {
    constructor (x, y) {
        this.pos = createVector(x,y);
        this.vel = p5.Vector.random2D(); // create random unit vector.
        this.vel.mult(random(3)); // multiply the unit vector by a random scalar value from 0 to n.
        this.acc = p5.Vector.random2D();
    }

    displayAndMove() {
        push()
        fill(30,10,200);
        ellipse(this.pos.x, this.pos.y, 12);
        pop();

        var randNum = floor(random(4));
        
        this.vel.add(this.acc); 
        this.pos.add(this.vel);
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

        this.speed = 0.004;
    }

    display() {
        push();
        noStroke();
      	fill(255, 102, 102)
        ellipse(this.x, this.y, 20);
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

        this.lifetime -= 0.05;
    }
}
