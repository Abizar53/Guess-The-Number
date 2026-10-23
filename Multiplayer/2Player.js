let currentPlayer = 1;
let secretNumberPlayer1;
let secretNumberPlayer2;

let gamePhase = "setup";
let noOfGuesses = 10;
let player1Guess = 0;
let player2Guess = 0;

let form_Element = document.querySelector("#guessForm");
let PlayerTitle = document.querySelector("#playerTitle");
let guessInput = document.querySelector("#guessInput");
let Submit_BTN = document.querySelector("#Submit");
let Message = document.querySelector("#message");

let PreviousGuess = document.querySelector("#previousGuesses");
let remainingGuesses = document.querySelector("#remainingGuesses");
let label_input = document.querySelector("#guessLabel");
