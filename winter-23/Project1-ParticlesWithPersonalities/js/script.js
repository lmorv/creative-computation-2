/**
Lost in the Forest
Leo Morales

Everything adapted to be object oriented from The Nature of Code 2 playlist on youtube: https://youtu.be/70MQ-FugwbI

A particle system trying to evoke a sense of wander and danger in the forest. As time passes the environment changes and weather conditions evolve.


- Background color change over time.
- Sparkles that emit from the mouse position.
*/

"use strict";

let sparkle = []; 

let wanderer;

let terrain = [];

let terrainNum = 6; // number of terrain graphs displayed onscreen.

// looks like I gotta declare these variables globally, they are used by the Wanderer class when setting the position in the constructor and in the move() method.
let xOffset1 = 0; // offset on the horizontal axis of the Perlin Noise space.
let xOffset2 = 10000; // Second offset in Noise space.

/**
Preload does nothing right now.
*/
function preload() {

}


/**
setup() creates program objects and declares some starting variables for them.
*/
function setup() {
    createCanvas(windowWidth, windowHeight); 

    sparkle = new Sparkle(width/2, height/2);

    // set up terrain graphs:
       let bump = 0.002;
       let speed = 0.015;
       let start = 0;

    for (let i = 0; i < terrainNum; i++) {
        terrain[i] = new Terrain(bump, speed, start);
        start += 1;
        speed += 0.002;
        bump -= 0.0002;
    }
    
}


/**
draw() handles the method calling for game objects, and sets a background color.
*/
function draw() {
    let forest = color(30,200,100);
    background(forest);

    // Handle terrain:
    for (let i = 0; i < terrain.length; i++ ) {

        terrain[i].displayAndPan();
    }

    // Handle sparkle:
    sparkle.display();
    sparkle.update();

    // Handle wanderer:
    wanderer = new Wanderer(); // gotta create a new wanderer every frame for it to move.
    wanderer.move();
    wanderer.display();

    // setInterval(changeColor, 4000);

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

class Wanderer {
    constructor() {
        
        this.x = map(noise(xOffset1), 0, 1, 0, width);  // Initial x position taking a Perlin seed from 0 to 1 mapped onto the width of the canvas.
        this.y = map(noise(xOffset2), 0, 1, 0, height); // initial y position.

        this.speed = 0.01;
    }

    display() {
        push();
        noStroke();
        fill(200,50,100);
        ellipse(this.x, this.y, 44, 40);
        pop();
    }

    move() {
        xOffset1 += this.speed; // using the same speed value for x and y movement. 
        xOffset2 += this.speed;
    }
}

class Tendril {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        
    }

    display () {
            //display some bezier curves
    }
}

class Blotch {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }

    display () {
            //display some blobs
    }
}


class Quad {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.angle = angle;
    }

    display () {
            //display some irregular parallelograms
    }
}

function changeColor() {
    console.log('changing color!'); 

    let water = color(30,100,200);
    let fire = color(200,30,100);
    // let forest = color(30,200,100);
    let earth = color(165,42,42);

    let currentColor = forest;
    
    background(currentColor);

    if(currentColor === water ) {
        let counter = 4;

        for(let i = 0; i < counter; i++) {  
                let counterToRange = map(i,0, counter, 0, 1); // I think this should convert the range of 0 to the counter's value to a 0 to 1 range...
                lerpColor(water,forest, i); // and using the mapped value here should increase the lerp amount for every tick of the counter... in theory.
            }
    }
}
