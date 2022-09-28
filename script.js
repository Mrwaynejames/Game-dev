 let game = prompt("R, P, S");


var rPS = ["R", "P", "S"];
var compChoice = rPS[Math.floor(Math.random() * 3)];
// var userChoice = prompt("R, P, S");

var wins = 0;
var losses = 0;
var ties = 0;

for (var i= 0; i <20; i++);
var compGuess = rPS[Math.floor(Math.random() * 3)];
var userChoice = prompt("R, P, S");

function random(compChoice, userChoice){
    if (userChoice === compChoice){
        alert("You tied." + compChoice);
    }
    else if (userChoice === "R" && compChoice === "S" || userChoice === "P" && compChoice === "R" || userChoice === "S" && compChoice === "R"){
        alert("You won" );
    }
    else{
        alert("You lost");
    }
}