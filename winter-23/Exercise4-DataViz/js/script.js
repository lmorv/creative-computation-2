/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let table;

/**
Description of preload
*/
function preload() {
    table = loadTable("EVA_Data.csv","csv","header");
}
 

/**
Description of setup
*/
function setup() {
    createCanvas(500, 500);
    background(0);
    console.log(table.getRowCount() + " total rows in table");
    console.log(table.getColumnCount() + " total columns in table");
    console.log(table.getColumn("Crew"));

    let rows = table.findRows('USA', 'Country');
    print(rows.length + ' USA Walks found');
    for (let i = 0; i < rows.length; i++){
    print(rows[i]);
    }

    // use a nested for loop to cycle through the table's cells
    for (var r = 0; r < table.getRowCount(); r++){
        ellipse(random(500), random(500), float(table.getString(r, 5)) * 5);

        console.log(float(table.getString(r, 5)));
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