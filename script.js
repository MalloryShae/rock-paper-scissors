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
let winner ="";

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
      setTimeout(finalScore(), 500);
    };
  });
});


function finalScore (){
  if (playerScore > computerScore){
    winner = "You win! Play again?";
  } else if (computerScore > playerScore){
    winner = "You lose! Play again?";
  };
  if (confirm(winner)){
    window.location.reload();
  };
};

 // currently abandoned attempt at custom dialog dialogBox
// function CustomConfirm(){
// 	this.render = function(dialog,op,id){
// 		var winW = window.innerWidth;
// 	    var winH = window.innerHeight;
// 		var dialogoverlay = document.getElementById('dialogoverlay');
// 	    var dialogbox = document.getElementById('dialogbox');
// 		dialogoverlay.style.display = "block";
// 	    dialogoverlay.style.height = winH+"px";
// 		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
// 	    dialogbox.style.top = "100px";
// 	    dialogbox.style.display = "block";
//
// 		document.getElementById('dialogboxhead').innerHTML = "Confirm that action";
// 	    document.getElementById('dialogboxbody').innerHTML = dialog;
// 		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Confirm.yes(\''+op+'\',\''+id+'\')">Yes</button> <button onclick="Confirm.no()">No</button>';
// 	}
// 	this.no = function(){
// 		document.getElementById('dialogbox').style.display = "none";
// 		document.getElementById('dialogoverlay').style.display = "none";
// 	}
// 	this.yes = function(op,id){
// 		if(op == "delete_post"){
// 			deletePost(id);
// 		}
// 		document.getElementById('dialogbox').style.display = "none";
// 		document.getElementById('dialogoverlay').style.display = "none";
// 	}
// }
// var Confirm = new CustomConfirm();

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
