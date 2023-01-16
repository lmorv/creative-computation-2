/**
Desperately Seeking Sadness
Leonardo Morales

A project to explore the Phaser game engine while desperately seeking sadness.
*/

"use strict";


let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);