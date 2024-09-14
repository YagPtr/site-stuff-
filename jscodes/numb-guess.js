"use strict"


var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var resetButton = document.querySelector('.resetButton');
var guessCount = 1;

let count=0;

guessSubmit.addEventListener("click", checkGuess);
resetButton.addEventListener("click", reset);
function checkGuess() {
    guesses.textContent+=" "+guessField.value
    count++;
    if (guessField.value>randomNumber){
        lowOrHi.textContent="твое число больше"
        guesses.textContent+="↓"
    }
    else if(guessField.value<randomNumber){
        lowOrHi.textContent="твое число меньше"
        lowOrHi.textContent.toLowerCase
        guesses.textContent+="↑"
        
    }
    for (let i=0;i<=count;i++)
    {
        var msg = document.createElement("p");
        msg.textContent = "This is a message box";
        lowOrHi.appendChild(msg);
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

function whatever(){
    for (var i = 1; i < 21; i++) {
        console.log(i);
      }
}

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
};

