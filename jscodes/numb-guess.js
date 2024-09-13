"use strict"


var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var resetButton = document.querySelector('.resetButton');
var guessCount = 1;



guessSubmit.addEventListener("click", checkGuess);
resetButton.addEventListener("click", reset);
function checkGuess() {
    guesses.textContent+=" "+guessField.value

    if (guessField.value>randomNumber){
        lowOrHi.textContent="твое число больше"
        guesses.textContent+="↓"
    }
    else if(guessField.value<randomNumber){
        lowOrHi.textContent="твое число меньше"
        guesses.textContent+="↑"
    }
    
    if (guessField.value==randomNumber)
        won();

}

function won(){
    alert("you won!")
    resetButton.hidden=false;
}

function reset(){
    guesses.textContent="your guesses: "
    lowOrHi.textContent=""
    randomNumber = Math.floor(Math.random() * 100) + 1;
    resetButton.hidden=true
}