function computerPlay() {
    var words = ['Rock', 'Paper', 'Scissors'];
    var randomNum = [Math.floor(Math.random() * words.length)]; 
    return words[randomNum]
 }
 let playerScore= 0;
 let computerScore = 0 ;
 
function playRound(playerSelection , computerSelection){
    
    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerScore++;
        return `You Lose! Paper covers rock. Score: ${playerScore} to ${computerScore}`;
    } else  if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        playerScore++;
        return `You Win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`;  
    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        computerScore++;
        return `You Lose! Scissors beats rock. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        playerScore++;
        return `You Win! Scissors beat paper. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        computerScore++;
        return `You Lose! Scissors cut paper. Score: ${playerScore} to ${computerScore}`
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        playerScore++;
        return `You Win! Paper covers rock. Score: ${playerScore} to ${computerScore}`
    } 
    else return `That was a draw. Try Again! Score: ${playerScore} to ${computerScore}`;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper, or Scissors')
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}

game();
