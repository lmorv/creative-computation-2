/**
Bats!
Leo Morales

This project is based on this tutorial by weidi: https://youtu.be/me04ZrTJqWA. And on techniques introduced in class.
*/

"use strict";

let table;

const NUM_BAT_IMAGES = 25;

let bats = [];
let batImg;

/**
Description of preload
*/
function preload() {
    table = loadTable("Bats_Dataset1.csv", "csv", "header");

    // load images into array
    // for (let i = 0; i < NUM_BAT_IMAGES; i++) {
    //     let batImg = loadImage('assets/images/bat${i}.jpg');
    //     bats.push(batImg);
    // }

    // set bat image:
    batImg = loadImage('assets/images/bat1.jpg');

}


/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    batImg.height = windowHeight; 
    batImg.width = windowWidth;
    
    // access pixels of a random image in the array:
    for (var col = 0; col < batImg.width; col+=2) {
        for (var row = 0; row < batImg.height; row+=2) {
            let xPos = col;
            let yPos = row;

            let c = batImg.get(xPos, yPos);

            push()
            translate(xPos + 200, yPos + 100);
            noFill();
            strokeWeight(random(5));
            stroke(color(c));
            // point(col+ windowWidth / 2, row + 90); // This a dot
            curve(
                xPos,
                yPos,
                sin(xPos) * 60,
                cos(yPos) * sin(xPos) * 40,
                0,
                0,
                cos(yPos) * sin(xPos) * 140,
                cos(yPos) * sin(xPos) * 50
            );
            pop();
        }
    }

    console.log(table.getRowCount() + " total rows in table");
    console.log(table.getColumnCount() + " total columns in table");
    console.log(table.getColumn("Families"));
    // use a nested for loop to cycle through the table's cells
    for (var r = 0; r < table.getRowCount(); r++){
        for (var c = 0; c < table.getColumnCount(); c++) {
            console.log(table.getString(r, c));
        }
    }
}


/**
Description of draw()
*/
function draw() {

}