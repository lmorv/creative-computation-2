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

let state = `briefing`; // possible states are: briefing, sampleGathering, baseCamp

/**
Description of preload
*/
function preload() {
}


/**
Description of setup
*/
function setup() {
  // createCanvas(500, 500);
}


/**
draw() handles the program's state change and calls the corresponding state functions
*/
function draw() {
  background(0);

  if (state === `briefing`) {
    brief();
  } else if (state === `sampleGathering`) {
    sampleGathering();
  } else if (state == `baseCamp`) {
    baseCamp();
  }
}

function mousePressed() {
  if
}

// function toggleText() {}
