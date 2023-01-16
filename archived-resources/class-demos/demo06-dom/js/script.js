/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let p1 = undefined;
let offsetX = 0;

setup();

function setup() {
  p1 = document.getElementById(`p1`);
  window.requestAnimationFrame(draw)
}

function draw() {
  p1.classList.toggle(`highlight`);

p1.style.left = `${offsetX}px`;

  window.requestAnimationFrame(draw);
}

// let paragraph = document.querySelectorAll(`paragraph`);

// let paragraphsArray = Array.from(paragraphs);
// paragraphsArray.push(`New thing!`);
//
// for(let i = 0; i<paragraphs.length;i++) {
//   let p = paragraphs[i];
//   p.innerHTML = `changed!`;
//   p.style.color = `#ff0000`;
// }


// Use forEach with anonimus function
// paragraphs.forEach(function(element) {
  // element.innerHTML = `Hoo-hah!`;
// });

// use forEach with a name function
// paragraph.foeEach(highlightLorem);

// function highlightLorem(element) {
//   let text = element.innerText;
//   if (text.includes(`Lorem`)) {
//     element.classList.add(`highlight`);      // classList operations allow you to add X
//     element.classList.remove(`paragraph`);  // element.classList.add(`highlight`);
//   }
// }
