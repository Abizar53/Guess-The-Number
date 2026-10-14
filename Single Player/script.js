let random_number=parseInt(Math.random() * 100 + 1 )
console.log(random_number)

let currentPlayer = 1;
let secretNumberPlayer1;
let secretNumberPlayer2;

let gamePhase = "setup";


let UserInput=document.querySelector('#guessInput')
let Submit_Btn=document.querySelector('#guessForm')

//submit button
Submit_Btn.addEventListener("submit" , function(e){
    e.preventDefault()
    const User_Guessed = parseInt(UserInput.value)
    Validate_input(User_Guessed);
})