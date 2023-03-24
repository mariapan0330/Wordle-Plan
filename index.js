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
function makeGameBoard(){
  // console.log('hello'.yellow, 'to you'.green);
  for(var i of gameBoard){
    console.log(i.join(""))
  }
}

function makeGuess() {
  userGuess = prompt('Your Guess')
}

function evaluateGuess() {
  if (userGuess.length != 5){
    console.log("That's not a valid entry.")
    return false
  }
  for(var c in userGuess){
    if (userGuess[c] == theAnswer[c]){
      gameBoard[0][c] = ""
    }
  }
}



function playWordle(){
  chooseWord()
  makeGameBoard()
  var gameOver = false
  while (!gameOver){
    makeGuess()
    gameOver = evaluateGuess()
    break
  }
}


playWordle()