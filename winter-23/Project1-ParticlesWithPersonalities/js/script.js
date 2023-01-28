/**
Lost in the Forest
Leo Morales

A particle system trying to evoke a sense of wander and danger in the forest. As time passes the environment changes and weather conditions evolve.

- Gradient background
*/

"use strict";

let water = {
    r: 30,
    g: 100,
    b: 200,
};

let fire = {
    r: 200,
    g: 30,
    b: 100,
};

let earth = {
    r: 165,
    g: 42,
    b: 42,
};

let forest = {
    r: 30,
    g: 200,
    b: 100,
};

let milliseconds = Millis();

/**
Description of preload
*/


function preload() {

}


/**
Description of setup
*/
function setup() {
    
}


/**
Description of draw()
*/
function draw() {
    createCanvas(windowWidth, windowHeight); // Creating canvas on here so that the height updates when re-sizing widow.

    background(30,200,100);

    print(milliseconds);
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

class Sparkle {
    constructor() {
        this.x = width/2;
        this.y = height/2;
    }

    display () {
            //display some shiny sparks
    }
}