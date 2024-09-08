

var myResetButton = document.querySelector("#nocat")

myResetButton.onclick = function () {
    alert("dead") 
    localStorage.setItem("bodyPressed", "dead")
}
