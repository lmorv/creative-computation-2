/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";



/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(400,400);
    ball = new Particle();
}

/**
Description of draw()
*/
function draw() {
    background(200,50,100);
    ball.display();
}

class Particle {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }
    display() {
        ellipse(this.x,this.y,10);
    }
}