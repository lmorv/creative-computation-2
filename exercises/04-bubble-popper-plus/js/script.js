/**
bubble Popper
Leo Morales

A program about popping bubbles with your index finger using the computer's camera and hand pose detection AI
*/

"use strict";


//

let state = `loading`; // possible states are: loading, running
// var to store the users web cam:
let video;
// name of the model
let modelName = `Handpose`;

// the Handpose model object:
let handpose;
// the current set of predictions:
let predictions = [];

// the bubble
let bubble = undefined;
// the pin
let pin = {
  tip: {
    x: undefined,
    y: undefined
  },
  head: {
    x: undefined,
    y: undefined,
    size: 20
  }
};

/**
Initializes the webcam and the Handpose, also creates the bubble objectS
*/
function setup() {
  createCanvas(640, 480);

  // Access user's web cam and hide the resulting HTML element.
  video = createCapture(VIDEO);
  video.hide();

  // initialize the Handpose model and  transition to the running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`Model loaded.`);
    state = `running`;
  });

  // listen for predictions
  handpose.on(`predict`, function(results) {
    console.log(results);
    predictions = results;
  });

  // Our basic bubble
  bubble = {
    x: random(width),
    y: height,
    size: 90,
    vx: 0,
    vy: -2
  };
}

/**
Handles all posible states (loading, running)
*/
function draw() {
  if (state === `loading`) {
    loading();
  } else if (state === `running`) {
    running();
  }

  background(0);

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];
    // pin
    push()
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop()
    // pin base
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    // check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
    }
  }

  // bubble movement
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }

  push();
  fill(0, 200, 100);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

function loading() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}