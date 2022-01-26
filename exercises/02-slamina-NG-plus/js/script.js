/**
Slamina NG +
Leonardo Morales

This is a program that reads an random animal name backwards and detects the user's answer to the question of what animal the program is refernig to with some ditional features.
*/

"use strict";

const menuItems = [
  "aloo pie",
  "apple crumble",
  "apple pie",
  "new zealand meat pie",
  "bacon and egg pie",
  "bakewell tart",
  "banana cream pie",
  "banoffee pie",
  "bay tat",
  "bavarian Cream Pie",
  "bean pie",
  "bedfordshire clanger",
  "bisteeya",
  "blackberry pie",
  "black bottom pie",
  "black bun",
  "blueberry pie",
  "bob Andy pie",
  "bougatsa",
  "boysenberry pie",
  "bridie",
  "buko pie",
  "bumbleberry pie",
  "bundevara",
  "bündner nusstorte",
  "burek",
  "butter pie",
  "butter tart",
  "buttermilk pie",
  "canelé",
  "cantaloupe pie",
  "caramel tart",
  "cashew pie",
  "cheesecake",
  "cheese pie",
  "cherry pie",
  "chess pie",
  "chestnut pie",
  "chicken and mushroom pie",
  "chiffon pie",
  "pâté chinois",
  "cobbler",
  "coconut cream pie",
  "cookie Cake Pie",
  "corned beef pie",
  "coulibiac",
  "cumberland pie",
  "curry pie",
  "curry puff",
  "custard tart",
  "derby pie",
  "egg pie",
  "egg tart",
  "empanada",
  "fisherman's Pie",
  "flan",
  "flapper pie",
  "fleischkuekle",
  "flipper pie",
  "fried pie",
  "gibanica",
  "green grape pie",
  "homity pie",
  "hornazo",
  "jamaican patty",
  "kalakukko",
  "karelian pasties",
  "key lime pie",
  "khachapuri",
  "killie pie",
  "knish",
  "kuchen",
  "kurnik",
  "lemon ice box pie",
  "lemon meringue pie",
  "manchester tart",
  "meat and potato pie",
  "meat pie",
  "melktert",
  "melton mowbray pork pie",
  "millionaire pie",
  "mince pie",
  "mississippi mud pie",
  "moravian chicken pie",
  "mustard tart",
  "neenish Tart",
  "pască",
  "pastafrola",
  "pastel de nata",
  "pasty",
  "peach pie",
  "peanut pie",
  "pear tart",
  "pecan pie",
  "pie à la mode",
  "pirog",
  "pork pie",
  "pot pie",
  "pumpkin pie",
  "quiche",
  "qumeshtore me pete",
  "raisin pie",
  "rappie pie",
  "raspberry pie",
  "rhubarb pie",
  "samosa",
  "saskatoonberry pie",
  "sausage roll",
  "scotch pie",
  "sea pie",
  "sfiha",
  "shaker lemon pie",
  "shepherd's Pie",
  "shoofly pie",
  "soparnik",
  "southern tomato pie",
  "spinach pie",
  "stargazy pie",
  "steak and kidney pie",
  "steak pie",
  "strawberry pie",
  "strawberry rhubarb pie",
  "sugar cream pie",
  "sweet potato pie",
  "tamale pie",
  "greek cheese pie",
  "tarta de Santiago",
  "tourtière",
  "treacle tart",
  "vlaai",
  "västerbotten pie",
  "walnut pie",
  "watalappam",
  "woolton pie",
  "whoopie pie",
  "zelnik",
  "black coffee"
];

const startMessage = `click to begin.`;

let currentAnimal = ``;
let currentAnswer = startMessage;


let state = `startScreen`; // possible states are startScreen, slamTime, and endScreen

/**
setup() initializes annyang, creates the canvas to specified dimentions and defines global text styling settings
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      'I would like a *menuItem': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(90);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

/**
draw() defines the color of the background, handles program state changes, and checks the user's spoken answer for correctness while displaying it.
*/
function draw() {
  background(0);
  displayAnswer();
}

/**
checks for answer correctness to color text, then displays the answer.
*/
function displayAnswer() {
  // check for answer correctness
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
  } else if (currentAnswer === startMessage) {
    fill(255, 100, 200);
  } else {
    fill(255, 0, 0);
  }
  // display user's answer
  text(currentAnswer, width / 2, height / 2);
}

function sayAnimalBackwards(animal) {
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);
}

/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}

/**
stores the guessed animal answer as a lower case string to match the answer format
*/
function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  // console.log(currentAnswer);
}

function nextQuestion() {
  currentAnswer = ``;
  currentAnimal = random(menuItem);
  sayAnimalBackwards(currentAnimal);
}

/**
resets the program to a new backwards animal uterance/quenstion.
*/
function mousePressed() {
  nextQuestion();

}