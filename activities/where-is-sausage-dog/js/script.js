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


/**
preload
*/
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }
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

    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }
}

/**
Description of draw()
*/
function draw() {
  background(255, 255, 0);

  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }
}