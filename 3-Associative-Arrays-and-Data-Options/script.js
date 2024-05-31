// Lesson 3: Associative Arrays & Data Options

// // Ex 1. English grades

// let lastNames = ["McDavid", "Nugent-Hopkins", "Draisaitl"];
// let englGrades = [73, 91, 85];
// let writingDiploma = [true, false, false];

// console.group("last Name \t\t Grade \t\t Writing Diploma");

// console.log("--------- \t\t ------ \t ---------------");

// console.log(
//   lastNames[0] + "\t\t\t\t" + englGrades[0] + "\t\t\t" + writingDiploma[0]
// );

// console.log(
//   lastNames[1] + "\t\t\t" + englGrades[1] + "\t\t\t" + writingDiploma[1]
// );
// console.log(
//   lastNames[2] + "\t\t\t" + englGrades[2] + "\t\t\t" + writingDiploma[2]
// );

// You try: Put this data in alphabetical order using arraymethods
// lastNames.sort();
// englGrades.sort();
// writingDiploma.sort();
// console.log(lastNames + englGrades + writingDiploma);

// let lastG = englGrades.pop();
// let lastD = writingDiploma.pop();
// lastNames.unshift(lastNames.pop());
// englGrades.unshift(lastG);
// writingDiploma.unshift(lastD);
// console.table([lastNames, englGrades, writingDiploma]);

// // Ex 2. Rectangles

// var rectangles = [
//   [100, 150, 20, 200],
//   [220, 200, 130, 45],
//   [150, 300, 75, 75],
// ];

// console.log(rectangles[1][2]);

// ctx.fillStyle = "green";

// function drawRect() {
//   for (i = 0; i < rectangles.length; i++) {
//     ctx.fillRect(
//       rectangles[i][0],
//       rectangles[i][1],
//       rectangles[i][2],
//       rectangles[i][3]
//     );
//   }
// }

// // Push another Rect,
// var aRectangle = [20, 300, 45, 75];
// rectangles.push(aRectangle);
// drawRect();

// // change 2nd rect width
// rectangles[1][2] = 200;
// drawRect();

// Objects  (Bacque's favourite)
// var player = {
//   health: 500,
//   attackStat: 20,
//   defenseStat: 12
// }

// var firstNames = ["Bones", "Welma", "Frank", "Han", "Jack"];
// var lastNames = ["Smith", "Seger", "Mathers", "Solo", "Jackles"];
// var heights = [158, 169, 172, 183, 201];

// var yourName = prompt("What is your first name?");
// var yourLast = prompt("What is your last name?");
// var yourHeight = +prompt("What is your height (cm)?");

// console.table([yourName, yourLast, yourHeight]);

// for (i = 0; i < heights.length; i++) {
//   if (yourHeight < heights[i]) {
//     firstNames.unshift(yourName);
//     lastNames.unshift(yourLast);
//     heights.unshift(yourHeight);asejlk
//   } else if (yourHeight == heights[i]) {
//     firstNames.push(yourName);
//     lastNames.push(yourLast);
//     heights.push(yourHeight);
//   }
// }

// console.log(firstNames);
// console.log(lastNames);
// console.log(heights);

// let ticTacToeBoard = [
//   ["X", "X", "O"],
//   ["", "X", "O"],
//   ["", "", ""],
// ];

// function displayBoard() {
//   console.table(ticTacToeBoard);
// }

// displayBoard();

// let colNum = 0;
// let rowNum = 0;
// var preRow = prompt("place an X in the ROW for Tic Tac Toe (top/mid/bottom).");
// var preCol = prompt(
//   "place an X in the COLLUMN for Tic Tac Toe (left/mid/right)."
// );
// preRow.toLowerCase();
// preCol.toLowerCase();
// if (preCol == " left") {
//   colNum = 0;
// } else if (preCol == "mid") {
//   colNum = 1;
// } else if (preCol == "right") {
//   colNum = 2;
// }
// if (preRow == "top") {
//   rowNum = 0;
// } else if (preRow == "mid") {
//   rowNum = 1;
// } else if (preRow == "bottom") {
//   rowNum = 2;
// }

// if (ticTacToeBoard[rowNum][colNum] == "") {
//   ticTacToeBoard[rowNum][colNum] = "X";
//   displayBoard();
// } else {
//   alert("wrong");
// }

// function checkForWinner() {
//   // Variables
//   // let collumnScore = 0;
//   // let rowScore = 0;
//   let colCount = 0;
//   // Check row -> collumn then add
//   for (i = 0; i < 3; i++) {
//     if (firstCol = ticTacToeBoard[i][0])
//       colCount++;

//   }
// }

var dragon = {
  health: 100,
  atkString: ">",
  attackPwr: 15,
};

var player = {
  health: 90,
  atkString: "+",
  attackPwr: 17,
};

var atkOutDragon = "";
var atkOutPlayer = "";
function attack() {
  console.log(atkOutDragon);
  for (i = 0; i < dragon.attackPwr; i++) {
    atkOutDragon += dragon.atkString;
  }
  console.log("THE DRAGON ATTACKS!");
  console.log(atkOutDragon);
  player.health = player.health - dragon.attackPwr;
  console.log(
    `The player is struck for ${dragon.attackPwr} and has ${player.health} HP remaining.`
  );

  for (i = 0; i < player.attackPwr; i++) {
    atkOutPlayer += player.atkString;
  }
  console.log("THE PLAYER ATTACKS!");
  console.log(atkOutPlayer);
  dragon.health = dragon.health - player.attackPwr;
  console.log(
    `The dragon is struck for ${player.attackPwr} and has ${dragon.health} HP remaining.`
  );
}
attack();

// // I want to make crits + diff atks later
// function critHit() {
//   let randNum = Math.floor(Math.random() * 10);
//   if (randNum > 5){
//     num *= 3;
//   }
// }
