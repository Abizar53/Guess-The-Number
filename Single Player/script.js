let random_number=parseInt(Math.random() * 100 + 1 )
console.log(random_number)

//  Variables
let UserInput=document.querySelector('#guessInput')
let guess_Slot=document.querySelector('#previousGuesses')
let Remaining_Chances=document.querySelector('#remainingGuesses')
let Submit_Btn=document.querySelector('#guessForm')
let Low_or_High=document.querySelector('#lowOrHigh')
let StartOver_Container = document.querySelector('#startOver')

let p = document.createElement('p')

let Prev_Guess=[]
let no_of_Guess=0

let playGame=true

Submit_Btn.addEventListener("submit" , function(e){
    e.preventDefault()
    const User_Guessed = parseInt(UserInput.value)
    Validate_input(User_Guessed);
})


function Validate_input (User_Guessed){
    if(isNaN(User_Guessed)){
        alert("Please enter a valid number")
    }else if (User_Guessed<1 || User_Guessed>100){
        alert("Please enter a valid number")
    }  else {
        Prev_Guess.push(User_Guessed)
        if (no_of_Guess === 10){
            Display_Guess(User_Guessed)
            Display_Message(`Game over, Random number was ${random_number}`)
            End_Game()
        }else{
            Display_Guess(User_Guessed)
            Check_Guess(User_Guessed)

        }
    }
}

function Check_Guess (User_Guessed){
    if(User_Guessed===random_number){
        Display_Message("you guessed it right") 
        End_Game()
    } else if (User_Guessed<random_number) {
        Display_Message("Your guess is too low");
    }else {
        Display_Message("your guess is too highh")
}
}

function Display_Guess (User_Guessed){
    guess_Slot.innerHTML+=`${User_Guessed}   `
    no_of_Guess++
    Remaining_Chances.innerHTML=`${11-no_of_Guess}`
}
function Display_Message (Message){
    Low_or_High.innerHTML=`<h2> ${Message} </h2>`
}
function End_Game(User_Guessed){
    UserInput.value=''
    UserInput.setAttribute('disabled','')
    document.querySelector('#Submit').disabled = true;
    p.classList.add('button')
    p.innerHTML='<button id=newGame> Start NewGame </button>'
    StartOver_Container.appendChild(p)
    playGame=false
    StartOver()

}