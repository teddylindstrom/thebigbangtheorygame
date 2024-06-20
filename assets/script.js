// Wait for the DOM to finish loading before running the game
// Add event listeners to the buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type"); 
                if (this.getAttribute("data-type") === "0") {
                    playerChoice = "rock";
                } else if (this.getAttribute("data-type") === "1") {
                    playerChoice = "paper";
                } else if (this.getAttribute("data-type") === "2") {
                    playerChoice = "scissors";
                }
            
            playerChoiceDisplay.innerHTML = playerChoice;
            generateComputerChoice();
            checkResult(computerChoice, playerChoice);
            
        });
    }
});

const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const choices = ["rock", "paper", "scissors"];
let computerChoice;

/** 
 * Generate the computers random selection of rock, paper 
 * or scissors */ 
function generateComputerChoice() {
     
    computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceDisplay.innerHTML = computerChoice;
            
}

/**
 *  Compares computer and player choice and decides winning result.
 *  Updates winners score tally.
*/
