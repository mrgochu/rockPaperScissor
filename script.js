function computerPlay(){
    let computerChoice = "";
    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1){
        computerChoice = "Rock";
    }
    else if (num == 2){
        computerChoice = "Scissor";
    }
    else computerChoice = "Paper";
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        content.textContent = ("TIE!");
        return "Tie";
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            content.textContent = ("You Lose! Paper beats Rock.");
            return 0;
        }
        else {
            content.textContent = ("You win! Rock beats Scissor.");
            return 1;
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissor"){
            content.textContent = ("You Lose! Scissor beats Paper.");
            return 0;
        }
        else {
            content.textContent = ("You win! Paper beats Rock.");
            return 1;
        }
    }
    else if (playerSelection == "scissor"){
        if (computerSelection == "rock"){
            content.textContent = ("You Lose! Rock beats Scissor.");
            return 0;
        }
        else {
            content.textContent = ("You win! Scissor beats Paper.");
            return 1;
        }
    }

}

function game(){
    let player = 0;
    let computer = 0;
    let computerChoice = "";
    let playerChoice = "";
    let score = -1;

    // playing 5 rounds option
    // for (let i = 0; i < 5; i++){ 
        computerChoice = computerPlay();
        playerChoice = prompt("Enter Rock, Paper or Scissor...");
        score = playRound(playerChoice, computerChoice);
        if (score == 1){
            player++;
            console.log(`Player: ${player} point(s).\nComputer: ${computer} point(s).`);
        }
        else if (score == 0) {
            computer++;
            console.log(`Player: ${player} point(s).\nComputer: ${computer} point(s).`);
        }
        else {
            console.log(`Player: ${player} point(s).\nComputer: ${computer} point(s).`);
        }
    // }
    if (player > computer){
        console.log("Player Wins!");
        console.log(`SCORE: Player: ${player} Computer: ${computer} `);
    }
    else {
        console.log("Computer Wins!");
        console.log(`SCORE: Player: ${player} Computer: ${computer} `);
    }
}