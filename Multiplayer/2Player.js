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

    // Storing number in player 1,2
    if (currentPlayer === 1) {
      secretNumberPlayer1 = secret_Number;
      currentPlayer = 2;
      console.log(`Current player is ${currentPlayer}, Right now`);

      // printing next player message
      PlayerTitle.innerText = "Player 2: Enter your secret number";
      Message.innerText = "Player 1's number saved!";
    } else {
      secretNumberPlayer2 = secret_Number;
      gamePhase = "guess";
      currentPlayer = 1;
      console.log(`Now the current player is ${currentPlayer} Right now`);
      PlayerTitle.innerText = "Both players have entered their numbers!";
      Message.innerText = "Secret numbers saved. Ready to start guessing!";
      // guessInput.disabled = true;
      // document.querySelector("#Submit").disabled = true;
    }

    
    guessInput.value = "";
    // both player number are
    if (secretNumberPlayer1 && secretNumberPlayer2) {
      console.log("Player 1 secret:", secretNumberPlayer1);
      console.log("Player 2 secret:", secretNumberPlayer2);
      gamePhase = "guess";
      guessLabel.innerText = "Enter number between 1 to 100";
    }
    return;
  }