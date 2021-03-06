/**
Double R Dinner Simulator
Leonardo Morales

This program, based on the Slamina activity, simulates the experience of ordering a pie or a black coffee at the Double R Dinner, but in the Black Lodge dimension. That is to say that the client can only order today's special, which is recited in reverse by a disembodied voice.
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
  "bavarian cream pie",
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
  "pasca",
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
  "tourtiere",
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

const startMessage = `click to hear today's special.`;

let currentSpecial = ``;
let currentOrder = startMessage; // displays a starting prompt initially.


let state = `startScreen`; // possible states are startScreen, placeOrder, and orderPlaced.

/**
setup() initializes annyang, creates the canvas to specified dimentions and defines global text styling settings
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      'I would like a *menuItem': guessSpecial
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(75);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

/**
draw() defines the color of the background, handles program state changes, and checks the user's spoken answer for correctness while displaying it.
*/
function draw() {
  background(0);
  if (state === `startScreen`) {
    currentOrder = startMessage;
    startScreen();
    displayOrder();
  } else if (state === `placeOrder`) {
    placeOrder();
    displayOrder();
  } else {
    placeOrder();
    displayOrder();
  };

  console.log(state);

}

function startScreen() {
  push();
  textSize(60);
  text(`Welcome to the Double R Dinner!`, width / 2, height / 2 - 150);
  pop();
}

function placeOrder() {
  push();
  textSize(60);
  text(`What would you like to order?`, width / 2, height / 2 - 150);
  pop();
}

/**
checks for answer correctness to color text, then displays the answer along with a conditional message.
*/
function displayOrder() {
  // check for answer correctness
  if (currentOrder === startMessage) { // order not yet placed.
    fill(255, 100, 200);
    text(currentOrder, width / 2, height / 2);
  } else if (currentOrder === currentSpecial) { // success condition.
    // set state to success:
    state = `orderPlaced`;
    push();
    fill(0, 255, 0);
    textSize(50);
    text(`${currentOrder} happens to be today's special!`, width / 2, height / 2);
    pop();
    text(`good for you.`, width / 2, height / 2 + 150);
  } else { // fail condition.
    push();
    fill(255, 0, 0);
    textSize(50);
    text(`${currentOrder} is not today's special.`, width / 2, height / 2);
    pop();
    text(`please order something sensible.`, width / 2, height / 2 + 150);
  }

}

function saySpecialBackwards(animal) {
  let reverseSpecial = reverseString(currentSpecial);
  responsiveVoice.speak(reverseSpecial);
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
function guessSpecial(special) {
  currentOrder = special.toLowerCase();
  // console.log(currentOrder);
}

function nextSpecial() {
  currentSpecial = random(menuItems);
  saySpecialBackwards(currentSpecial);
}

/**
resets the program to a new backwards animal uterance/quenstion.
*/
function mousePressed() {
  if (state === `startScreen`) {
    state = `placeOrder`;
    nextSpecial();
  } else if (state === `orderPlaced`) {
    state = `startScreen`;
  } else {
    nextSpecial();
  }
}