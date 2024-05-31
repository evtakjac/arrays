1. With parallel arrays, you have to be careful when modifying the arrays as this could cause the data to be unrelated. When using parallel arrays, if you change the position of an element of one array, make a similar change to all the arrays.

2. 

```
cities.splice(2, 0, 'Winnipeg');
cities.splice(2, 0, 850);
```

3. 
```
a. console.log(pokemon[1][0]);
b. pokemon[0][1] = 'poison';
c. pokemon[2][2] -= 10;
d. pokemon.push(['Caterpie', 'bug', 195]);
e. for(let i=0; i<pokemon.length;i++){
  console.log("Name: " + pokemon[i][0] + ", Element: " + pokemon[i][1] + ", Total Stats: " + pokemon[i][2])
}
```

4.
```
let abdiDog = {
  breed: 'golden retriever',
  weight: 30,
  color: 'dark golden'
}

let account = {
  fName: 'Tifa',
  lName: 'Lockhart',
  number: 2157,
  balance: 537
}
```

5.
```
a. console.log(car.make);
b. car.color = 'red';
c. car.weight += 50;
d. car.year = 2012;
```

6.
```
a. console.log(instagramPosts[34].date)
b. for (let i=0; i < instagramPosts.length; i++){
  console.log(instagramPosts[i].image);
}
c. var likesCount = 0;
for (let i=0; i < instagramPosts.length; i++){
  if(instagramPosts[i].likes > 50){
    likesCount++;
  }
}
console.log(likesCount);
```

7. 
```

// Multidim array
var movies = [['Avatar', 2.847, 2009], ['Avengers: Endgame', 2.797, 2019], ['Titanic', 2.187, 1997], ['Star Wars: The Force Awakens', 2.068, 2015], ['Avengers: Infinity War', 2.048, 2018]]

// Object array
var movies = [
  {
    title: 'Avatar',
    gross: 2.847,
    year: 2009
  },
  {
    title: 'Avengers: Endgame',
    gross: 2.797,
    year: 2019
  },
  {
    title: 'Titanic',
    gross: 2.187,
    year: 1997
  },
  {
    title: 'Star Wars: The Force Awakens',
    gross: 2.068,
    year: 2015
  },
  {
    title: 'Avengers: Infinity War',
    gross: 2.048,
    year: 2018
  },
]
```


### Exercise 1 Solution

```
var firstNames = ['Bones', 'Welma', 'Frank', 'Han', 'Jack']

var lastNames = ['Smith', 'Seger', 'Mathers', 'Solo', 'Jackles']

var heights = [158, 169, 172, 183, 201]

var fName = prompt('Enter first name:');
var lName = prompt('Enter last name:');
var userHeight = +prompt('Enter height');

// part a
  // firstNames.push(fName);
  // lastNames.push(lName);
  // heights.push(userHeight);

// part b
  // for (let i = 0; i < heights.length; i++){
  //   if (userHeight <= heights[i]){
  //     firstNames.splice(i, 0, fName);
  //     lastNames.splice(i, 0, lName);
  //     heights.splice(i, 0, userHeight);
  //     break;
  //   } else if (i == heights.length - 1){
  //     firstNames.push(fName);
  //     lastNames.push(lName);
  //     heights.push(userHeight);
  //     break;
  //   }
  // }

console.log(firstNames);
console.log(lastNames);
console.log(heights);
```

### Exercise 2 Solution

```
function displayBoard(board) {
  for (let row = 0; row < 3; row++){
    console.log("[" + board[row][0] + "]\t[" + board[row][1] + "]\t[" + board[row][2] + "]");
  }
}

function checkForWinner(player, board){
  
  for (let i = 0; i < 3; i++){
    // check rows
    if (board[i][0] == player && board[i][1] == player && board[i][2] == player) return true;

    // check columns
    if (board[0][i] == player && board[1][i] == player && board[2][i] == player) return true;

  }

  // check diags
  if (board[0][0] == player && board[1][1] == player && board[2][2] == player) return true;

  if (board[0][2] == player && board[1][1] == player && board[2][0] == player) return true;

  // no winner!
  return false;

}

// Global Vars
let ticTacToeBoard = [
  ['X', 'X', 'O'],
  ['', 'X', 'O'],
  ['', '', '']
]
let row;
let column;

// do while loops are just like while loops except they are guaranteed to run at least once, as the condition is checked at the end.
do {
  row = +prompt('Enter row (1-3):') - 1;
  column = +prompt('Enter column (1-3):') - 1;
} while (ticTacToeBoard[row][column] != '')

ticTacToeBoard[row][column] = 'X';
displayBoard(ticTacToeBoard);

console.log(checkForWinner('X', ticTacToeBoard));
```

### Exercise 3 Solution

```
var dragon = {
  health: 100,
  atkString: '>',
  attackPwr: 15
}

// part a
function attack(actor) {
  let attackString = '';
  for (let i = 0; i < actor.attackPwr; i++){
    attackString += actor.atkString;
  }

  console.log(attackString);
}

attack(dragon);

// part b
var player = {
  health: randomInt(80,100),
  atkString: '-/--> ',
  attackPwr: randomInt(10,20)
}

attack(player);

// part c
console.log('The dragon attacks!\n');
attack(dragon);
player.health -= dragon.attackPwr;

console.log('\nThe player is struck for ' + dragon.attackPwr + ' and has ' + player.health + ' health remaining.\n');

console.log('The player attacks!\n');
attack(player);
dragon.health -= player.attackPwr;

console.log('\nThe dragon is struck for ' + player.attackPwr + ' and has ' + dragon.health + ' health remaining.\n');
```

