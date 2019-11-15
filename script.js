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

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    scoreDisplay.textContent = "Player Wins: " + playerScore + " | Computer Wins: " +computerScore+ " | Ties: " + tieScore;
    document.querySelector('.playerOptions').appendChild(roundDisplay);
    document.querySelector('.playerOptions').appendChild(scoreDisplay);
    rounds ++;
    if (rounds === 5){
      buttons.forEach((button) => {button.disabled = true});
      setTimeout(finalScore, 1000);
    };
  });
});





// Need to: store round info somewhere - number of rounds, who has wins, loses, draws ; display on page (not console), see if I can cap rounds, Make page look better

function finalScore (){
  document.querySelector('.playerOptions').removeChild(roundDisplay);
  document.querySelector('.playerOptions').appendChild(finalDisplay);
  if ((playerScore > computerScore) && (playerScore > tieScore)){
    finalDisplay.textContent = "Player Wins best out of 5!"
  } else if ((computerScore > playerScore) && (computerScore > tieScore)){
    finalDisplay.textContent = "Computer Wins best out of 5!"
  }else{
    finalDisplay.textContent = "It's a tie! Nobody wins best out of 5"
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
