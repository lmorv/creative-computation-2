/**
Topological Anomaly sample gathering
Leonardo Morales

Based on the Southern Reach trilogy by Jeff Vandemeer. Uses the lighthouse keeper's speech written by Jeff.
*/

"use strict";

let littanyLines = [
  `Where lies the strangling fruit that came from the hand of the sinner`,
  `I shall bring forth the seeds of the dead`,
  `to share with the worms that gather in the darkness`,
  `and surround the world with the power of their lives`,
  `while from the dim lit halls of other places`,
  `forms that never were and never could be`,
  `writhe for the impatience of the few`,
  `who never saw what could have been.`,
  `In the black water`,
  `with the sun shining`,
  `at midnight,`,
  `those fruit shall come ripe and in the darkness`,
  `of that which is golden shall split open to reveal`,
  `the revelation of the fatal softness in the earth.`,
  `The shadows of the abyss`,
  `are like the petals of a monstrous flower`,
  `that shall blossom within the skull`,
  `and expand the mind beyond what any man can bear,`,
  `but whether it decays under the earth`,
  `or above on green fields,`,
  `or out to sea`,
  `or in the very air,`,
  `all shall come to revelation,`,
  `and to revel,`,
  `in the knowledge`,
  `of the strangling fruit`,
  `—and the hand of the sinner shall rejoice,`,
  `for there is no sin in shadow or in light`,
  `that the seeds of the dead cannot forgive.`,
  `And there shall be in the planting`,
  `in the shadows`,
  `a grace and a mercy`,
  `from which shall blossom dark flowers,`,
  `and their teeth shall devour and sustain`,
  `and herald the passing of an age.`,
  `That which dies shall still know life in death`,
  `for all that decays is not forgotten`,
  `and reanimated it shall walk the world`,
  `in the bliss of not-knowing.`,
  `And then there shall be a fire`,
  `that knows the naming of you,`,
  `and in the presence of the strangling fruit,`,
  `its dark flame shall acquire`,
  `every part of you that remains.`
];

let currentLittany = [];

let state = `brief`; // possible states are: brief, sampleGathering, baseCamp

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}


/**
draw() handles the program's state change and calls the corresponding state functions
*/
function draw() {
  background(0);
  updateCanvasSize();

  if (state === `brief`) {
    brief();
  } else if (state === `sampleGathering`) {
    sampleGathering();
  } else if (state == `baseCamp`) {
    baseCamp();
  }
}

/**

*/
function updateCanvasSize() {
  // Set the canvas's CSS width and height properties to the new values
  let currentWidth = undefined;
  let currentHeight = undefined;

  currentWidth = windowWidth;
  currentHeight = windowHeight;

  canvas.elt.style.width = `${currentWidth}px`;
  canvas.elt.style.height = `${currentHeight}px`;
}

/**

*/
function brief() {
  push();
  textAlign(CENTER, CENTER);
  text(`You are the biologist in the scouting mission into Area X conducted by the Southern Reach. [...]`, windowWidth / 2, windowHeight / 2);
  pop();
}

function sampleGathering() {
  push();
  textAlign(CENTER, CENTER);
  text(`gather samples`, windowWidth / 2, windowHeight / 2);
  pop();
}

/**

*/
function baseCamp() {
  push();
  textAlign(CENTER, CENTER);
  text(`Base camp`, windowWidth / 2, windowHeight / 2);
  pop();
}

/**

*/
function mousePressed() {
  if (state === `brief`) {
    state = `sampleGathering`;
  };
}

/**

*/
function keyPressed() {
  if (keyCode === ENTER && state === `sampleGathering`) {
    state = `baseCamp`;
  } else if (keyCode === ENTER && state === `baseCamp`) {
    state = `sampleGathering`;
  } else if (keyCode === ESCAPE) {
    state = `brief`;
  }
}
