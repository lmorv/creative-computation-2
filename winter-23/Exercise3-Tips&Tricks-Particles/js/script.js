/**
Tips & Tricks for Particles
Leo Morales

Class exercise, and online explorations expanding on techniques to work with particle systems (Main source of knowledged being The Coding Train).
*/

"use strict";

let sparkle = [];

let xOffset1 = 0; // offset on the horizontal axis of the Perlin Noise space.
let xOffset2 = 10000;
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

    // let x = random(width);

    let x = map(noise(xOffset1), 0, 1, 0, width);
    let y = map(noise(xOffset2), 0, 1, 0, height);

    xOffset1 += 0.01; // x speed value
    xOffset2 += 0.01;

    push();
    noStroke();
    ellipse(x, y, 44, 40);
    pop();
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
    
    display () {
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