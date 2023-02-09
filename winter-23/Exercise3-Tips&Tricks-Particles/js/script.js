/**
Tips & Tricks for Particles
Leo Morales

Class exercise, and online explorations expanding on techniques to work with particle systems (Main source of knowledged being The Coding Train).

Questions: 
- what is the difference between let and var? What is the best practice on deciding which to use?

*/

"use strict";

let sparkle = [];

let xOffset1 = 0; // offset on the horizontal axis of the Perlin Noise space.
let xOffset2 = 10000;

let increment = 0.002
let timeIncrement = 0.015;
let terrainStart = 0;

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
}

/**
Description of draw()
*/
function draw() {
    let water = color(30,100,200);
    background(water);
    // Handle wanderer:
    let wanderer = new Wanderer();
    wanderer.display();
    wanderer.move();

   
    // noLoop();
    push();
    noFill();
    stroke(255);
    beginShape();

    let xOffset3 = terrainStart;
    for (let x = 0; x < width; x++) {

        let y = noise(xOffset3) * height; // using the global XOffset3 variable.
        vertex(x, y);

        xOffset3 += increment;

    }
    endShape();
    terrainStart += timeIncrement;
    pop();

    // loop(); 
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