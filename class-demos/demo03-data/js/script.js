/**
Data Class Demo
Leo Morales

* local storage
  * How to store more than one data-set?
  * How to trigger a new save/item?
  * What about saving files to the computer itself?
    * saveCanvas(), saveString(), saveJSON() ...
  * How do I add something to a save-data object
* JSON
  * How do you go through a JSON array sequentially?
  * Creating character dialoge (questions and answers)?
*/

"use strict";

let saveData = {
  key: `cart263a-data-live-coding-save-data`,
  players: [{
      name: `joachin`,
      age: 23,
      eyeColor: `turquoise`,
      background: {
        r: 255,
        g: 200,
        b: 120
      }
    },
    {
      name: `jaqueline`,
      age: 22.9,
      eyeColor: `diamond`,
      background: {
        r: 200,
        g: 255,
        b: 100
      }
    }
  ]

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
  createCanvas(500, 500);

  // let loadedData = JSON.parse(localStorage.getItem(savedata.key));
  // if (loadData) {
  //   saveData = loadedData;
  // }
}


/**
Description of draw()
*/
function draw() {
  background(0)

  for (let i = 0; i < saveData.players.length; i++) {
    let player = saveData.players[i];
    push();
    fill(player.background.r, player.background.g, player.background.b);
    rect(0, i * 100, 200, 100);

    fill(0);
    textSize(32);
    text(player.name, 0, 1 * 100 + 100)
    pop();
  }
}

function mousePressed() {
  let player = {
    name: prompt(`What is your name?`),
    age: random(10, 80),
    eyeColor: random([`red`, `blue`]),
    background: {
      r: random(1, 255),
      g: random(1, 255),
      b: random(1, 255)
    }
  };

  saveData.players.push(player);
}

function keyPressed() {
  saveJSON(saveData, `all-my-secrets.json`);
}