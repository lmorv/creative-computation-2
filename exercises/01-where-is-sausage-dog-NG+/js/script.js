/**
Where is Sausage Dog
Leo Morales

A find wally type game but with animals and a sausage dog.
*/

"use strict";

const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;
let state = `gameplay` // possible states are `startscreen`, `gameplay`,`endscreen`.

let objectOfInquiry = `Sausage Dog`;

/**
preload loads images into variables for later use in draw()
*/
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage(`assets/images/sausage-dog.png`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  //create the animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let randomAngle = random(0, 360);

    let animal = new Animal(x, y, animalImage, randomAngle);
    animals.push(animal);
  }

  // create the sausage Dog

  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage, 0);
}

/**
Description of draw()
*/
function draw() {
  background(255, 255, 0);
  if (state === `startscreen`) {
    startscreen();
  } else if (state === `gameplay`) {
    gameplay();

  } else if (state === `endscreen`) {
    endscreen();
  }
}

function startscreen() {
  push();
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text(`Find the ${objectOfInquiry}`, windowWidth / 2, windowHeight / 2);
  text(`Click to continue`, windowWidth - 200, windowHeight - 200);
  pop();
}

function gameplay() {
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  sausageDog.update();
}

function mousePressed() {
  sausageDog.mousePressed();
}