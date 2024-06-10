
    let computerScore = 0;
    let humanScore = 0;
    let roundCounter = 0;
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

   

    rockButton.addEventListener("click", () => {
        humanChoice = "Rock";
        playRound();
    });
    paperButton.addEventListener("click", () => {
        humanChoice = "Paper";
        playRound();
    });
    scissorsButton.addEventListener("click", () => {
        humanChoice = "Scissors";
        playRound();
    });

    function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];  // Array items 0, 1, 2            
        const random = Math.floor(Math.random() * choices.length);  // Generating a random number from 0 inclusive to 1 exclusive and multiplies it by the array length which is 3 then rounds it down with Math.floor and gives a random integer between 0 and 2 inclusive and returns a random item from the array based off the array item number
        return choices[random];
    }




function playRound() {

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

        if (computerScore === 5) {
                console.log("You Lose!");
            } else if (humanScore === 5) {
                console.log("You Win!");
            } else {
                console.log("Draw!");
            }
        
}

