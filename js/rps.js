var playerChoice = prompt("Select rock, paper or scissors to play!");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var matchUp = function(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) {
    return "The result is a tie!";
}
if(playerChoice === "rock") {
    if(computerChoice === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(playerChoice === "paper") {
    if(computerChoice === "rock") {
        return "paper wins";
    } else {
        if(computerChoice === "scissors") {
            return "scissors wins";
    }
}
if(playerChoice === "scissors") {
    if(computerChoice === "rock") {
        return "rock wins";
