function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice){
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    let compChoice = computerSelection.toLowerCase();
    if(playerChoice == compChoice){
        return "It's a draw!";
    }
    else if(playerChoice == "rock" && compChoice == "paper") {
        return "You lose! Paper beats Rock";
    }
    else if(playerChoice == "rock" && compChoice == "scissors") {
        return "You won! Rock beats Scissors";
    }
    else if(playerChoice == "paper" && compChoice == "scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if(playerChoice == "paper" && compChoice == "rock") {
        return "You won! Paper beats rock";
    }
    else if(playerChoice == "scissors" && compChoice == "rock") {
        return "You lose! Rock beats Scissors";
    }
    else if(playerChoice == "scissors" && compChoice == "paper") {
        return "You won! Scissors beats paper";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Choose Rock, Paper or Scissors.");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
    }
}