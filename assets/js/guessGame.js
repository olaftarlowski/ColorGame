var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var gameOver = false;
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var colorh1 = document.querySelector(".h1btn");

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    
    h1.style.background = "steelblue";
    for ( var i = 0; i < squares.length; i++) {
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        } else {
       squares[i].style.display = "none"; 
    }
    
}});


$("button").mouseover(function() {
  $( "p" ).toggle(1000);
});
$("button").mouseout(function() {
  $( "p" ).toggle(200);
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    
    h1.style.background = "steelblue";
    for ( var i = 0; i < squares.length; i++) {
       squares[i].style.backgroundColor = colors[i];
       squares[i].style.display = "block"; 
    
    
}
});
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    for (var i = 0; squares.length; i++){
        squares[i].style.background = colors[i];
    }
    
    
                             })
for (var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor=colors[i];
    
    squares[i].addEventListener("click", function(){
        
        var clickedColor = this.style.backgroundColor;
        
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            
            
        } 
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            
        }
    });
}

function changeColors(color){
    for( var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
function pickColor (){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i<num; i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor (){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset (){
    
}

