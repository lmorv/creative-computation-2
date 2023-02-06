/**
Lost in the Forest
Leo Morales

A particle system trying to evoke a sense of wander and danger in the forest. As time passes the environment changes and weather conditions evolve.

- Background color change over time.
- 
*/

"use strict";

// I don't know if i'll use these color objects...

//  {
//     r: 30,
//     g: 100,
//     b: 200,
// };

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

let state = 'green'; // possible states are "green", "blue", "red" 

let enviroColor = {
    r: 10,
    g: 200,
    b: 10,
};

/**
Description of preload
*/


function preload() {

}


/**
Description of setup
*/
function setup() {
    let water = color(30,100,200);
    createCanvas(windowWidth, windowHeight); 
    let milliseconds = millis();
}


/**
Description of draw()
*/
function draw() {
    let water = color(30,100,200);
    background(water);
    let milliseconds = millis();

    // setInterval(changeColor, 2000);
    // setInterval(turnGreen, 4000);
    // setInterval(turnRed, 6000);


//    console.log(enviroColor.b);
}

 
function changeColor() {
    // console.log('changing color!');
    
    if (enviroColor.b < 200 && state == 'green') {           // turn canvas blue
        enviroColor.b = enviroColor.b + 1;

        if (enviroColor.b >= 200) {
        state = 'blue';
        }    

        enviroColor.g = enviroColor.g - 1;
        enviroColor.r = enviroColor.r - 1;

    } else if (enviroColor.r < 200 && state == 'blue') {     // Turn canvas red
        enviroColor.r = enviroColor.r + 1;

        if (enviroColor.r >= 200) {
            state = 'red';
        }

        enviroColor.g = enviroColor.g - 1;
        enviroColor.b = enviroColor.b - 1;

    } else if (enviroColor.g < 200 && state == 'red') {         // Turn canvas green
        enviroColor.g = enviroColor.g + 1;

        if (enviroColor.g >= 200) {
            state = 'green';
        }

        enviroColor.r = enviroColor.r - 1;
        enviroColor.b = enviroColor.b - 1;
    }
}

function turnGreen() {
    
}

function turnRed() {
    
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