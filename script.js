let computerPlay = function(){
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)]
  return choice;
}

let playerSelection = "";

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelection = button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });
});

// Need to: store round info somewhere - number of rounds, who has wins, loses, draws ; display on page (not console), see if I can cap rounds, Make page look better


let playerScore = 0
let computerScore = 0
let tieScore = 0

let playRound = function(playerSelection, computerSelection){
  let winning = "You win! "+playerSelection+ " beats " +computerSelection+"!";
  let losing = "You lose! " + computerSelection + " beats "+ playerSelection + "!";
  let tie = "It's a tie!"
  if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection  === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")){
    playerScore = playerScore + 1;
    console.log(winning);
  } else if (playerSelection  === computerSelection){
    tieScore = tieScore +1;
    console.log(tie);
  } else {
    computerScore = computerScore + 1;
    console.log(losing);
  }
}


// function capitalize(string){
//   let lower = string.toLowerCase();
//   let first = lower.slice(0,1);
//   let upper = first.toUpperCase();
//   let rest = lower.slice(1);
//   let caps = upper+rest;
//   return caps;
// }
//


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
// // function finalScore (){
// //   let scoreDisplay = "Player Wins: " + playerScore + " | Computer Wins: " +computerScore+ " | Ties: " + tieScore;
// //   console.log(scoreDisplay);
// //   if ((playerScore > computerScore) && (playerScore > tieScore)){
// //     console.log("Player Wins best out of 5!")
// //   } else if ((computerScore > playerScore) && (computerScore > tieScore)){
// //     console.log("Computer Wins best out of 5!")
// //   }else{
// //     console.log("It's a tie! Nobody wins best out of 5")
// //   }
// // }
//
// // game();
// // finalScore();
