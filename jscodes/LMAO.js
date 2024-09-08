

var myResetButton = document.querySelector("#nocat")

myResetButton.onclick = function () {
    localStorage.setItem("bodyPressed", "dead")
    alert("dead") 
    
}
