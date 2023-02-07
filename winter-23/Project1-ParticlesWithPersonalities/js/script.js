/**
Lost in the Forest
Leo Morales

A particle system trying to evoke a sense of wander and danger in the forest. As time passes the environment changes and weather conditions evolve.

- Background color change over time.
- 
*/

"use strict";

let state = 'green'; // possible states are "green", "blue", "red" NOT USED

let sparkle = [];

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

    sparkle = new Sparkle(width/2, height/2);

}


/**
Description of draw()
*/
function draw() {
  
    
    sparkle.display();
    
    setInterval(changeColor, 4000);
//    console.log(enviroColor.b);
}


function changeColor() {
    console.log('changing color!'); 

    let water = color(30,100,200);
    let fire = color(200,30,100);
    let forest = color(30,200,100);
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
        fill(255);
        square(this.x,this.y, this.dim, 40, 0, 40, 0); // Square with some rounded corners.
        
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