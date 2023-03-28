// PLAN:
// computer chooses a 5-letter word
// set up game board with 6 guesses
// user guesses a word
// evaluate the guess
// green = right letter right place
// yellow = right letter wrong place 
// grey = wrong letter

// in Shell: npm install colors --save, then:
var colors = require('colors'); // now in console, you can add .color to your string
var theAnswer
var userGuess
// NEW
var roundNum

function chooseWord() {
  var possibleChoices = ["match", "drift", "lover", "screw", "paper", "flash", "prove", "sugar", "house", "torch", "judge", "ready", "grind", "ankle", "class", "curve", "cycle"]
  
  theAnswer = possibleChoices[Math.floor(Math.random()*possibleChoices.length)]
  // console.log(possibleChoices.length)
  console.log(`COMPUTER CHOICE: ${theAnswer}`.brightRed)
}


var gameBoard = [
  ["_","_","_","_","_"],
  ["_","_","_","_","_"],
  ["_","_","_","_","_"],
  ["_","_","_","_","_"],
  ["_","_","_","_","_"],
  ["_","_","_","_","_"]]
// NEW: rename makeGameBoard to printGameBoard
function printGameBoard(){
  // console.log('hello'.yellow, 'to you'.green);
  for(var i of gameBoard){
    console.log(i.join(""))
  }
}

function makeGuess() {
  userGuess = prompt("Guess a 5-letter word")
  // count the letters in userGuess
  // if lettercount is 5, then continue
  // if not, ask again.
  var letterCount = userGuess.length
  while (letterCount != 5 || !/^[a-zA-Z]+$/.test(userGuess)) {
    userGuess = prompt("That's invalid, guess a 5-letter word")
    letterCount = userGuess.length
  }
  // NEW
  userGuess = userGuess.split("")
  // console.log(userGuess)
}

function evaluateGuess() {
  for(var c in userGuess){
    // *NEW: Evaluation rules.
    // * if the current character in userGuess is the same as the current character in the answer, then make that spot in the gameboard green
    if (userGuess[c] == theAnswer[c]){
      gameBoard[roundNum][c] = userGuess[c].green
      // * if the answer includes the current character and the index of that letter and the current character aren't the same (i.e. guess is GUESS and word is S)
    } else if (theAnswer.includes(userGuess[c]) && theAnswer.indexOf(userGuess[c] != c)){
      gameBoard[roundNum][c] = userGuess[c].yellow
    } else {
      gameBoard[roundNum][c] = userGuess[c].grey
    }
  }
}



function playWordle(){
  roundNum = 0
  chooseWord()
  printGameBoard()
  // var gameOver = false
  // while (!gameOver){
  makeGuess()
  console.clear()
  evaluateGuess()
  printGameBoard()
  // gameOver = evaluateGuess()
    // break
  // }
}


playWordle()