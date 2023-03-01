/**
Bats of the world
Leo Morales

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let table;

/**
Description of preload
*/
function preload() {
    table = loadTable("Bats_Dataset1.csv", "csv", "header");
}


/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(0);
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