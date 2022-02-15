/**
Topological Anomaly sample gathering
Leonardo Morales

This is a template. You must fill in the title,
author, and this description to match your project!

*Callbacks?
  a callback is sinonimus with an event handler. function callbacks and event handlers are distinct from functions writen as instantaneous instructions,that arent waiting for some condition or event to happen in order to execute the code within the function.

*Arrow functions?
  arrow functions are abreviated anonimus functions.
*/

"use strict";
let textVisible = false;
let flashes = 10

/**
Description of preload
*/
function preload() {
}


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  if (textVisible === true) {
    push();
    textAlign(CENTER);
    textSize(50);
    fill(255);
    text(`Showing Text`, width/2,height/2);
    pop();
  };
}

function mousePressed() {
  setTimeout(function () {
    textVisible = true;
  }, 1000);
}

// function toggleText() {}
