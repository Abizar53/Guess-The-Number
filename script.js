let random_number=parseInt(Math.random() * 100 + 1 )
console.log(random_number)


//submit button
Submit_Btn.addEventListener("submit" , function(e){
    e.preventDefault()
    const User_Guessed = parseInt(UserInput.value)
    Validate_input(User_Guessed);
})