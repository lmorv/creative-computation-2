/**

* annyang!
  * general review of the process?
* ResponsiveVoice
  * Can you connect ResponsiveVoice to other libraries?

*/

"use strict";


/**
Description of preload
*/

let face = `:-|`;

function preload() {

}

/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

  if (annyang) {
    let commands = {
      "I am so happy": happy
    };
    annyang.addCommands(commands);
    annyang.statrt();
    annyang.debug(true);
  } else {
    // Annyang does not work!
    alert(`Please visit this page in google chrome`);
  }


}

/**
Description of draw()
*/
function draw() {
  background(0);
  push();
  textSize(128);
  fill(0);
  text(face, width / 2, height / 2);
  pop();

  function happy() {
    face = `:-)`;
  }

}