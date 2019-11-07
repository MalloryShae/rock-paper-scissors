
    function computerPlay(){
      let choices = ["rock", "paper", "scissors"];
      let choice = choices[Math.floor(Math.random() * choices.length)]
      return choice;
    }

   let playRound = function(playerSelection, computerSelection){
      let winning = "You win! "+playerSelection+ " beats " +computerSelection+"!";
      let losing = "You lose! " + computerSelection + " beats "+playerSelection + "!";
      let tie = "It's a tie!"
      if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
          (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") ||
          (playerSelection.toLowerCase() === "paper" && computerSelection === "rock")){
        console.log(winning);
        return winning;
      } else if (playerSelection.toLowerCase() === computerSelection){
        console.log(tie);
        return tie;
      } else {
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
      }
      }
// Need to add way to keep score and then console.log the score at the end declaring a final winner
// Need to format the winning and losing messages as well
