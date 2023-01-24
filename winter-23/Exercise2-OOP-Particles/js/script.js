/**
OOP Particles
Leo Morales

An object oriented programing exercise with balls!
*/

"use strict";

let balls = []; // Empty array for particles.

/**
would load pretty assets if I had any.
*/
function preload() {

}

/**
setup() creates particles and stores them in their array
*/
function setup() {
    createCanvas(740,500);

    for(let i = 0; i < 50; i++) {
        balls[i] = new Particle(random(3,100)); 
    }
   
}

/**
draw calls the particle's methods to display them and initialize their behavior
*/
function draw() {
    background(200,50,100);

    for(let i = 0; i < balls.length; i++) {
        balls[i].moveAndDisplay();
        balls[i].affectSpeed();
        balls[i].affectColor();
        balls[i].wallCollision();
    }

}

class Particle {
    constructor(pSize) {
        this.x = width/2;
        this.y = height/2;
        this.speed = 5;
        this.diameter = pSize;

        // color:
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }

    moveAndDisplay() {
        // Move
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        // Display
        noStroke();
        ellipse(this.x,this.y,this.diameter);
    }

    affectSpeed() {
      this.speed = map(mouseX,0,width,1,20);
    }

    affectColor() {
        this.r = map(this.x,0, width,0, 255);
        this.g = map(this.y,0,height,0,255);
        this.b = map(mouseY,0, height,0,255);

        fill(this.r,this.g,this.b);
    }

    wallCollision() {
        // Restrict horizontal displacement to canvas boundaries
      if(this.x > width) {
        this.x = width - this.diameter/2;
      } else if(this.x < 0) {
        this.x = this.diameter/2;
      }
      // Restrict vertical displacement to canvas boundaries
      if (this.y > height) {
        this.y = height - this.diameter/2;
      } else if ( this.y < 0) {
        this.y = this.diameter/2;
      }
    }
 }