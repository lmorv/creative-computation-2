/**
Spy Profile Generator
Leonardo Morales

A vanilla spy profile generator using JSON data sets.
password is: resourcefulness
*/

"use strict";

// Spy profile object
let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  seacretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
};

// Variables for profile data storage.
let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

// JSON data sets
const instrumentURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
const objectURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const tarotURL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;

const savedProfileKey = `spy-profile-data`; // used to setItem and getIten from localStorage
let data = JSON.parse(localStorage.getItem(savedProfileKey));

/**
preload() loads the data from the JSON data sets into their corresponding variables.
*/
function preload() {
  instrumentData = loadJSON(instrumentURL);
  objectData = loadJSON(objectURL);
  tarotData = loadJSON(tarotURL);
}


/**
setup() creates a canvas and loads profile data, if present, checks password and generates a profile if no profile data is found.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // check if there is saved profile data to load. if  the data variable is not null(empty) assign stored properties too spyProfile.
  if (data) {
    let password = prompt(`Agent! What is your password?`);

    if (password === data.password) {
      setSpyData();
      // spyProfile.name = data.name;
      // spyProfile.alias = data.alias;
      // spyProfile.seacretWeapon = data.seacretWeapon;
      // spyProfile.password = data.password;
    }
  } else {
    generateSpyProfile();
  }
}

function setSpyData() {
  // let data = JSON.parse(localStorage.getItem(`spy-profile-data`)); // I have to declare the data variable again here... seems wrong.

  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.seacretWeapon = data.seacretWeapon;
  spyProfile.password = data.password;
}

function generateSpyProfile() {
  // prompt user for their name:
  spyProfile.name = prompt(`Agent! What is your name?`);
  // generate profile from data sets
  let instrument = random(instrumentData.instruments); // stores a random instrument
  spyProfile.alias = `The ${instrument}`; // ads the word `The` to the string

  spyProfile.seacretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations); // select a random card object
  spyProfile.password = random(card.keywords); // access that card's keywords array and select a random item.

  // save the user's profile info:
  localStorage.setItem(savedProfileKey, JSON.stringify(spyProfile));
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