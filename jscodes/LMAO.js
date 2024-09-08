

var myResetButton = document.querySelector("#nocat")

myResetButton.onclick = function () {
    localStorage.removeItem("bodyPressed")
}