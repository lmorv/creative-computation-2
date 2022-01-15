/**
javascript review experiments
Leonardo Morales

These are warm up experimens on basic javascript techniques done in class and by following recorded demos.
*/

"use strict";


/**
Description of preload
*/
function preload() {
  const NUM_CIRCLES = 10;
  let circleSizeIncrease = 50;
  let circleAlpha = 50;
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

  // Just for fun, since they ARE variables after all
  circleAlpha = map(mouseX, 0, width, 10, 100);
  circleSizeIncrease = map(mouseY, 0, height, 10, 100);

  // Loop once for each of 10 circles, drawing them 50 pixels larger each time
  for (let i = 0; i < NUM_CIRCLES; i++) {
    push();
    fill(255, circleAlpha);
    ellipse(width / 2, height / 2, i * circleSizeIncrease);
    pop();
  }
}