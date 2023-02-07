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

    sparkle = new Sparkle(mouseX,MouseY);

}


/**
Description of draw()
*/
function draw() {
  
    setInterval(changeColor, 4000);
  
    for 
    


//    console.log(enviroColor.b);
}


function changeColor() {
    // console.log('changing color!');
    let water = color(30,100,200);
    let fire = color(200,30,100);
    let forest = color(30,200,100);
    let earth = color(165,42,42);

    let currentColor = forest;
    
    background(currentColor);

    if(currentColor === water ) {
        let counter = 4;
            for(let i = 0; i < counter; i++) {  
                lerpColor(water,forest, i);
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
        this.dim = 4;
    }
    
    display () {
        //display some shiny sparks
        noStroke();
        fill(255);
        square(this.x,this.y, this.dim, 20, 0, 20, 0);
        
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