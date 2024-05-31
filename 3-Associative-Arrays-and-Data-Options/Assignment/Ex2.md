# Exercise 2

Below is a game of tic tac toe in progress.

a. Write a function called displayBoard() that takes this array as a parameter and displays the board.

```
let ticTacToeBoard = [
  ['X', 'X', 'O'],
  ['', 'X', 'O'],
  ['', '', '']
]
```

b. Prompt the user, who is playing 'X' for the row and column they would like to place an 'X' in. Check to see if that space is available and then update the board. Then, display the board. If they try to play in an occupied space, ask them for a new row/column.

c. Write a checkForWinner function. It should take a letter character as a paramemter ('X' or 'O'), and the board, and check to see if there is 3 in a row, column, or diagonal. Return true if there is, false otherwise.

(Note: This is as much of the game as we will get working for this exercise, but it could make for a nice final project to get it working fully with 2 players or against the computer);