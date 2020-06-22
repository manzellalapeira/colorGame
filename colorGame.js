/* var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]; */

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var numSquares = 6;
//var pickedColor = colors[3];
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



for(var i = 0;i < modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    })
}
function reset(){
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change dispay of picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";

}

resetButton.addEventListener("click", function(){
    reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.background = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
		var clickedColor = this.style.background;
        //compare color to pickedColor
		if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
		} else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
		}
    })
}

function changeColors(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //add num random colors
    for(var i = 0;i < num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    // pick red 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick green 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick blue 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", "+g+", "+b+")";
}