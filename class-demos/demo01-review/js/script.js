/**
P5js Review demo
Leonardo Morales

Smoothing out conceptual understanding of constants, Object Parameters, and First Class Functions.

open questions:
* Constants for strings? How to know when to do what?
  * Path names?
* Parameters (when to use them? classes vs functions?)
  * x, y, size?
* First class functions
  * setTimeout()? Maybe showing text for a specific amount of time by switching off text
*/

"use strict";

const WIDTH = 500;
const HEIGHT = 500;

const IMAGE_PATH = `assets/images`;
const NUM_CLOWN_IMAGES = 3;

let clownImages = [];

let message = {
  text: `Now you see me.`,
  visible: true,
  hideDelay: 2000
};


/**
Description of preload
*/
function preload() {

  for (let i = 0; i < NUM_CLOWN_IMAGES; i++) {
    clownImages[i] = loadImage(`${IMAGE_PATH}/clown${i}.png`);
  };

}

/**
Description of setup
*/
function setup() {
  createCanvas(WIDTH, HEIGHT);
}

/**
Description of draw()
*/
function draw() {
  background(0);



  displayMessage(WIDTH / 2, HEIGHT / 2);
}

function displayMessage(x, y) {
  let clownImage = random(clownImages);

  if (message.visible) {
    push();
    fill(255);
    textSize(24);
    textAlign(CENTER);
    image(clownImage, 0, 0);
    text(message.text, x, y);
    pop();
  };
}

// writing a function as a variable using an anonymus function:
// let hideMessage = function() {
//   message.visible = false;
// }

// normal writing of a function
function hideMessage() {
  message.visible = false;
}

function mousePressed() {
  setTimeout(hideMessage, message.hideDelay);
}