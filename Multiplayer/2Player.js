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



// Phase 1 : Storing both player secret number
PlayerTitle.innerText = "Player 1: Enter your secret number";
form_Element.addEventListener("submit", function (event) {
  event.preventDefault();
  let secret_Number = parseInt(guessInput.value);
  console.log(secret_Number);
  // Validating
  if (gamePhase === "setup" && secret_Number >= 1 && secret_Number <= 100) {
    Message.innerText = "Enter a number between 1 and 100";
