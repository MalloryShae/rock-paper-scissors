function capitalize(string){
  let lower = string.toLowerCase();
  let first = lower.slice(0,1);
  let upper = first.toUpperCase();
  let rest = lower.slice(1);
  let caps = upper+rest;
  return caps;
}

let computerPlay = function(){
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)]
  return choice;
}

let playerScore = 0
let computerScore = 0
let tieScore = 0
let rounds = 0


let playRound = function(playerSelection, computerSelection){
  let playerCaps = capitalize(playerSelection);
  let computerCaps = capitalize(computerSelection);
  let winning = "You win! "+playerCaps+ " beats " +computerSelection+"!";
  let losing = "You lose! " + computerCaps + " beats "+ playerSelection + "!";
  let tie = "It's a tie!"
  if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection  === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")){
    playerScore = playerScore + 1;
    roundDisplay.textContent = winning
  } else if (playerSelection  === computerSelection){
    tieScore = tieScore +1;
    roundDisplay.textContent =tie;
  } else {
    computerScore = computerScore + 1;
    roundDisplay.textContent=losing;
  }
}

let playerSelection = "";

const buttons = document.querySelectorAll('button');
const scoreDisplay = document.createElement('p');
const roundDisplay = document.createElement('p');
const finalDisplay = document.createElement('p');
const selectText = document.querySelector('.select');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scoreDisplay.textContent = "Player Wins: " + playerScore + " | Computer Wins: " +computerScore+ " | Ties: " + tieScore;
    document.querySelector('.playerOptions').appendChild(roundDisplay);
    document.querySelector('.playerOptions').appendChild(scoreDisplay);
    if (playerScore === 5 || computerScore === 5){
      buttons.forEach((button) => {button.style.display = 'none'});
      selectText.style.display = 'none';
      setTimeout(finalScore, 1500);
    };
  });
});


function finalScore (){
  document.querySelector('.playerOptions').replaceChild(finalDisplay, roundDisplay);
  if ((playerScore > computerScore) && (playerScore > tieScore)){
    finalDisplay.textContent = "Player Wins!"
  } else if ((computerScore > playerScore) && (computerScore > tieScore)){
    finalDisplay.textContent = "Computer Wins!"
  }
}


// // function game(){
// //   let rounds = 0
// //   for (var i = 0; i < 5; i++){
// //     let computerSelection = computerPlay();
// //     // let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()
// //     playRound(playerSelection, computerSelection);
// //     rounds = rounds + 1;
// //   }
// // }
//

//
// // game();
// finalScore();
