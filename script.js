
    function computerPlay(){
      let choices = ["rock", "paper", "scissors"];
      let choice = choices[Math.floor(Math.random() * choices.length)]
      return choice;
    }

    let playerScore = 0
    let computerScore = 0
    let tieScore = 0

   let playRound = function(playerSelection, computerSelection){
      let winning = "You win! "+playerSelection+ " beats " +computerSelection+"!";
      let losing = "You lose! " + computerSelection + " beats "+playerSelection + "!";
      let tie = "It's a tie!"
      if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
          (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") ||
          (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")){
        playerScore = playerScore + 1;
        console.log(winning);
        return winning;
      } else if (playerSelection.toLowerCase() === computerSelection){
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
        let playerSelection = prompt("Rock, Paper, or Scissors?")
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
// Need to add way to keep score and then console.log the score at the end declaring a final winner
// Need to format the winning and losing messages as well
