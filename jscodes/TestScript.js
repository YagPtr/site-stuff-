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


function xd(){
  if (localStorage.getItem("pressed?")=="yes"){
  document.getElementById("whate").textContent="ответ - нет, как и ссылок на этой странице";
  document.getElementById("link1").textContent="";
  document.getElementById("link2").textContent="";
  }
  else if(localStorage.getItem("pressed?")=="twice"){
    document.getElementById("whate").textContent="ладно верну ссылки";
    document.getElementById("link1").textContent="Другая страница, переход по метке";
    document.getElementById("link2").textContent="Отправить мне письмо";
  }
  else {
    document.getElementById("whate").textContent="Это заголовок верхнего уровня?";
    document.getElementById("link1").textContent="Другая страница, переход по метке";
    document.getElementById("link2").textContent="Отправить мне письмо";
  }

 // document.getElementsByName("#a").textContent="xdd";
  //document.getElementsByTagName("#a").textContent="xd";

}


document.querySelector("#whate").onclick=function(){

  if (localStorage.getItem("pressed?")!="yes")
    localStorage.setItem("pressed?", "yes")
  else 
    localStorage.setItem("pressed?", "twice")
  
  xd();

}



document.querySelector("body").onclick=function(){
  localStorage.setItem("bodyPressed", "yes")
  var myLMAOImage = document.querySelector("#bonus");
  myLMAOImage.setAttribute("src", "images/4x.webp");
  document.querySelector("#bonustext").textContent="Смешной кот";
}

document.querySelector("#useless").onclick=function(){
  document.querySelector("#useless").textContent="тут реально ниче нет, я даже отдельную переменную для отрисовки этого прикола не буду делать и при обновлении оно пропадет"
}


document.querySelector("#mpei").onclick=function(){
  localStorage.setItem("mpeiPressed", "yes")
  document.querySelector("#nya").textContent="ЧИНАЗЕС ТЫ РЕАЛЬНО ПЕРЕШЁЛ ПО ССЫЛКЕ НА САЙТ МЭИ"
}


if (localStorage.getItem("mpeiPressed")){
  document.querySelector("#nya").textContent="ЧИНАЗЕС ТЫ РЕАЛЬНО ПЕРЕШЁЛ ПО ССЫЛКЕ НА САЙТ МЭИ"
}


if (localStorage.getItem("pressed?")){
  xd();
 // document.getElementById("whate").textContent="ответ - нет";
}

var myResetButton = document.querySelector("#reset")

myResetButton.onclick = function () {
  localStorage.removeItem("pressed?")
  localStorage.removeItem("mpeiPressed")
  document.querySelector("#nya").textContent=""
  document.querySelector("#bonus").setAttribute("src", "");
  document.querySelector("#bonustext").textContent="";
  if (document.querySelector("#reset").textContent=="Вернуть как было"+" смешной кот остается")
    document.querySelector("#reset").textContent+=" найди как от него избавиться";
  if (document.querySelector("#reset").textContent=="Вернуть как было")
    document.querySelector("#reset").textContent+=" смешной кот остается";
  
  xd();
};


if (localStorage.getItem("bodyPressed")=="yes") {
  document.querySelector("#bonus").setAttribute("src", "images/4x.webp");
  document.querySelector("#bonustext").textContent="Смешной кот";
} else if (!localStorage.getItem("bodyPressed")){
  document.querySelector("#bonus").setAttribute("src", "");
  document.querySelector("#bonustext").textContent="";
} else if  (localStorage.getItem("bodyPressed")=="dead"){
document.querySelector("#bonus").setAttribute("src", "");
  document.querySelector("#bonustext").textContent="его кровь на твоих руках";
}


var myButton = document.querySelector("#button");
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
  if (storedName=="null"||storedName=="")
    myHeading.textContent = "Ты ничего не ввел  ";
  else 
    myHeading.textContent = "Ты ввел  " + storedName;
}

myButton.onclick = function () {
  setUserName();
};



