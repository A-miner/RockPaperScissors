        let playerScore = 0;
        let computerScore = 0;

function computerPlay(choices) {
        let choice = ['Rock', 'Paper', 'Scissors']
        let randomSelection = math.floor(Math.random() * choices.length);
        return choice [randomSelection];
        let computerSelection = computerPlay().toLowerCase;     
}

       

//>Get players choice and correct to compare
function userChoice() {
    let userChoice = prompt('Choose either "rock", "paper", or "scissors"');
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        return userChoice.toLowerCase;
    } else {
        alert("Invalid choice"); }
}
let playerSelection = userChoice().to; 

//>get the winner of a round
function playRound(playerSelection, computerSelection) {

    console.log(computerSelection);
    console.log(playerSelection);

      if (playerSelection === computerSelection) {  
          return "Ouch, it's a Tie! Try again!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "You lose.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      return "You lose.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "You lose.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "You win!"; }
}

//>create function to play the game
function Game(computerPlay) 
{
for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
        playRound();        
        console.log(playerSelection);
        console.log(randomSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        const score = "Player Score: " + playerScore + " Comp Score: " + computerScore;
        console.log(score); }
}

//>Play the game by calling the function
Game();