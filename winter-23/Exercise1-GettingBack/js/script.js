/**
Getting Back Into Code
Leonardo Morales Vega

This is an attempt at making a tick tack toe game, for warm up purposes.
*/

"use strict";


let state = 'startScreen' // possible states are OTurn, XTurn, OWin, XWin

// Points tracking, increase every time X or O scores a win.
let OPoints = 0;
let XPoints = 0;

let boardWidth = 800;
let boardHeight = 800;

let strokeAlpha = 50; // Transparency of grid
let gridThickness = 10; // thickness of grid lines, in pixels

/**
preload would load fancy art assets, if I had any.
*/
function preload() {

}


/**
setup creates the canvas
*/
function setup() {

    createCanvas(boardWidth, boardHeight);
    
}


/**
draw() determines the canvas background color and determines the flow of program states.
*/
function draw() {
    background(0,255,150);

    // draw global UI:
    drawGrid();
    drawScore();

    //State flow control: 
    if (state === 'startScreen') {
        startScreen();
    } else if (state === 'OTurn') {
        OTurn();
    } else if (state === 'XTurn') {
        XTurn();
    } else if (state === 'OWin') {
        OWin();
    } else if (state === "XWin") {
        XWin();
    }

}

function drawGrid() {
   
    push();
    // grid styling
    strokeWeight(gridThickness);
    stroke(0,0,0, strokeAlpha);

    //Vertical lines:
    line(boardWidth/3,0, boardWidth/3,boardHeight);
    line(boardWidth - (boardWidth/3),0, boardWidth - (boardWidth/3),boardHeight);

    //Horizontal lines:
    line(0, boardHeight/3, boardWidth, boardHeight/3);
    line(0, boardHeight - (boardHeight/3), boardWidth, boardHeight - (boardHeight/3))
    pop();
}

function drawScore() {
    push();
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text(`X: ${XPoints}`, 100, boardHeight - 20);
    text(`O: ${OPoints}`, boardWidth - 100, boardHeight - 20);
    pop();
}

function startScreen() {
// Start Screen Text:
    push();
    fill(0);
    textSize(50);
    textAlign(CENTER);
    text(`Tick Tack Toe!`, boardWidth / 2, boardHeight / 2);
    text(`Click to start`, boardWidth / 2, boardHeight - 100);
    pop();
}

function OTurn() {

     // Track mouse across grid
     trackMouse();
    
     // Display an O in corresponding cell upon click event.

    // Display Turn text:
    push();
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text(`O's Turn`, boardWidth / 2, 50);
    pop();
}

function XTurn() {

      // Track mouse across grid
      trackMouse();
    
      // Display an O in corresponding cell upon click event.
 
     // Display Turn text:

    push();
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text(`X's Turn`, boardWidth / 2, 50);
    pop();
}

function OWin() {
// increase OPoints by 1, reset arrays, transition to X's Turn

OPoints = OPoints++;
State = 'XTurn';
}

function XWin() {
// increase OPoints by 1, reset arrays, transition to X's Turn

OPoints = XPoints++;
State = 'OTurn';
}

function trackMouse() {
    // display a transparent square in the over the grid cell that the mouse overlaps

}

function mousePressed() {
    if (state === 'startScreen') {
        state = 'OTurn';
    } else if (state === 'OTurn') {
        state = 'XTurn'
    }
}

function keyPressed() {
    if (keyCode === ESCAPE) {
        state = 'startScreen'
    }
}