function capitalize(string){
  let lower = string.toLowerCase();
  let first = lower.slice(0,1);
  let upper = first.toUpperCase();
  let rest = lower.slice(1);
  let caps = upper+rest;
  return caps;
}

    function computerPlay(){
      let choices = ["rock", "paper", "scissors"];
      let choice = choices[Math.floor(Math.random() * choices.length)]
      return choice;
    }

    let playerScore = 0
    let computerScore = 0
    let tieScore = 0

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
        console.log(winning);
        return winning;
      } else if (playerSelection  === computerSelection){
        tieScore = tieScore +1;
        console.log(tie);
        return tie;
      } else {
        computerScore = computerScore + 1;
        console.log(losing);
        return losing;
      }
    }


    function game(){
      let rounds = 0
      for (var i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase()
        playRound(playerSelection, computerSelection);
        rounds = rounds + 1;
        let scoreDisplay = "Player Wins: " + playerScore + " | Computer Wins: " +computerScore+ " | Ties: " + tieScore;
        console.log(scoreDisplay);
      }
      if ((rounds === 5) && (playerScore > computerScore) && (playerScore > tieScore)){
        alert("Player Wins!")
      } else if ((rounds === 5) && (computerScore > playerScore) && (computerScore > tieScore)){
        alert("Computer Wins!")
      }else{
        alert("It's a tie!")
      }
      }

game()
