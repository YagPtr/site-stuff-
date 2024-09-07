"use strict"

var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tex2.png") {
    myImage.setAttribute("src", "images/tex1.png");
  } else {
    myImage.setAttribute("src", "images/tex2.png");
  }
};


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Введи что-то");
  localStorage.setItem("name", myName);
  if (myName==null||myName=="")
    myHeading.textContent = "Ты ничего не ввел  ";
  else 
    myHeading.textContent = "Ты ввел  " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  if (storedName=="null")
    myHeading.textContent = "Ты ничего не ввел  ";
  else 
    myHeading.textContent = "Ты ввел  " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
