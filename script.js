function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    let roundCounter = 0;

    function getHumanChoice() {
        const choice = prompt("Type either Rock, Paper or Scissors.");  // Get the human choice with a prompt to return Rock Paper or Scissors
        const lowerCaseChoice = choice.toLowerCase();  // convert to lowercase then capitalize the first letter
        const titleCaseChoice = lowerCaseChoice.charAt(0).toUpperCase() + lowerCaseChoice.substring(1);
        //      add option to prompt again if they enter an invalid string?
        return titleCaseChoice;
    }

    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];  // Array items 0, 1, 2            
        const random = Math.floor(Math.random() * choices.length);  // Generating a random number from 0 inclusive to 1 exclusive and multiplies it by the array length which is 3 then rounds it down with Math.floor and gives a random integer between 0 and 2 inclusive and returns a random item from the array based off the array item number
        return choices[random];
    }




function playRound() {

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
           
        if (humanChoice == computerChoice) {
            console.log("Draw! " + humanChoice + " vs. " + computerChoice);
        } else if (humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log("Point for Computer! " + "You chose: " + humanChoice + " vs. " + "Computer chose: " + computerChoice);
            computerScore++;  // score increment
        } else if (humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("Point for You! " + "You chose: " + humanChoice + " vs. " + "Computer chose: " + computerChoice);
            humanScore++; // score increment
        } 
        roundCounter++;  // increment round counter
        console.log("Round: " + roundCounter + " You: " + humanScore + " Computer: " + computerScore);
}

// Call playRound five times
playRound();
playRound();
playRound();
playRound();
playRound();

// The player with the highest score is the winner or it's a draw

function showWinner() {
    if (computerScore > humanScore) {
        console.log("You Lose!");
    } else if (humanScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("Draw!");
    }
}
showWinner();


}
playGame();