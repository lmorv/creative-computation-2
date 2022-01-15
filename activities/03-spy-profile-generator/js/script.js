/**
Spy Profile Generator
Leonardo Morales

A vanilla spy profile generator using JSON data sets.
*/

"use strict";


let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  seacretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
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
  createCanvas(windowWidth, windowHeight);

  spyProfile.name = prompt(`Agent! What is your name?`);
}

/**
Description of draw()
*/
function draw() {
  background(255);

  let profile = `**SPY PROFILE! DO NOT DIVULGE! **
  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Seacret Weapon: ${spyProfile.seacretWeapon}
  password: ${spyProfile.password}`;

  push();
  textFont(`courier, monospace`);
  textSize(24);
  textAlign(LEFT, TOP);
  fill(0);
  text(profile, 100, 100);
  pop();
}