/**
Getting Back Into Code
Leonardo Morales Vega

This is an attempt at making a tick tack toe game, for warm up purposes.
*/

"use strict";

let state = 'startScreen' // possible states are OTurn, XTurn, OWin, XWin

//Row arrays:
let row1 = [];
let row2 = [];
let row3 = [];

// Colum arrays:
let col1 = [];
let col2 = [];
let col3 = [];

// Diagonal arrays:
let diag1 = [];
let diag2 = [];

// Points tracking, increase every time X or O scores a win.
let OPoints = 0;
let XPoints = 0;

// Game board dimensions
let boardWidth = 800;
let boardHeight = 800;

let boardThird = boardHeight / 3; // A third of the board dimensions.

let strokeAlpha = 50; // Transparency of grid.
let gridThickness = 10; // thickness of grid lines, in pixels.


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
    text('Restart: ESC', boardWidth/2, boardHeight - 20)
    pop();
}

function startScreen() {
// Reset scores:
XPoints = 0;
OPoints = 0;

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
     // Track mouse across grid, and display O token
     trackMouseO();

    // Display Turn text:
    push();
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text(`O's Turn`, boardWidth / 2, 50);
    pop();
}

function XTurn() {

     // Track mouse across grid, and display X token
      trackMouseX();
 
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

function trackMouseO() {
    // display an O token in the grid cell that the mouse overlaps:

    if ( mouseX < boardThird && mouseY < boardThird ) {   // Grid cell 1.
        drawToken(`O`, boardThird / 2, boardThird /2);
    } else if ( mouseX < boardThird && mouseY > boardThird && mouseY < boardThird * 2 ) { // Grid cell 4.
        drawToken(`O`, boardThird / 2, boardHeight /2);
    } else if (mouseX < boardThird && mouseY > boardThird * 2 ) { // grid cell 7.
        drawToken('O',boardThird / 2, boardThird * 2.5 );
    } else if (mouseY < boardThird && mouseX > boardThird && mouseX < boardThird * 2 ) { // Grid cell 2.
        drawToken('O', boardWidth /2, boardThird / 2);
    } else if (mouseY < boardThird && mouseX > boardThird * 2 ) { // Grid cell 3.
        drawToken('O', boardThird * 2.5, boardThird / 2);
    } else if (mouseY > boardThird && mouseY < boardThird * 2 && mouseX > boardThird && mouseX < boardThird * 2 ) { // Grid cell 5.
        drawToken('O', boardWidth / 2, boardHeight / 2);
    } else if (mouseY > boardThird && mouseY < boardThird * 2 && mouseX > boardThird * 2) { // Grid cell 6.
        drawToken('O', boardThird * 2.5, boardHeight / 2);
    } else if (mouseY > boardThird * 2 && mouseX > boardThird && mouseX < boardThird * 2) { // Grid cell 8.
        drawToken('O', boardWidth / 2, boardThird * 2.5);
    } else if (mouseY > boardThird * 2 && mouseX > boardThird * 2 ) { // Grid cell 9.
        drawToken('O', boardThird * 2.5, boardThird * 2.5);
    }

}

function trackMouseX() {
    // display an X token in the grid cell that the mouse overlaps:

    if ( mouseX < boardThird && mouseY < boardThird ) {   // Grid cell 1.
        drawToken(`X`, boardThird / 2, boardThird /2);
    } else if ( mouseX < boardThird && mouseY > boardThird && mouseY < boardThird * 2 ) { // Grid cell 4.
        drawToken(`X`, boardThird / 2, boardHeight /2);
    } else if (mouseX < boardThird && mouseY > boardThird * 2 ) { // grid cell 7.
        drawToken('X',boardThird / 2, boardThird * 2.5 );
    } else if (mouseY < boardThird && mouseX > boardThird && mouseX < boardThird * 2 ) { // Grid cell 2.
        drawToken('X', boardWidth /2, boardThird / 2);
    } else if (mouseY < boardThird && mouseX > boardThird * 2 ) { // Grid cell 3.
        drawToken('X', boardThird * 2.5, boardThird / 2);
    } else if (mouseY > boardThird && mouseY < boardThird * 2 && mouseX > boardThird && mouseX < boardThird * 2 ) { // Grid cell 5.
        drawToken('X', boardWidth / 2, boardHeight / 2);
    } else if (mouseY > boardThird && mouseY < boardThird * 2 && mouseX > boardThird * 2) { // Grid cell 6.
        drawToken('X', boardThird * 2.5, boardHeight / 2);
    } else if (mouseY > boardThird * 2 && mouseX > boardThird && mouseX < boardThird * 2) { // Grid cell 8.
        drawToken('X', boardWidth / 2, boardThird * 2.5);
    } else if (mouseY > boardThird * 2 && mouseX > boardThird * 2 ) { // Grid cell 9.
        drawToken('X', boardThird * 2.5, boardThird * 2.5);
    }

}

function drawToken(token, x, y) {
        push();
        fill(0,0,0,150);
        textSize(200);
        textAlign(CENTER,CENTER);
        text(token, x, y);
        pop();
}

function mousePressed() {
    if (state === 'startScreen') {
        state = 'OTurn';
    } else if (state === 'OTurn') {
        state = 'XTurn';
    } else if (state === 'XTurn') {
        state = 'OTurn';
    }
}

function keyPressed() {
    if (keyCode === ESCAPE) {
        state = 'startScreen'
    }
}