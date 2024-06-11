
    let computerScore = 0;
    let humanScore = 0;
    let roundCounter = 0;
    const round = document.querySelector(".round");
    const rounds = document.querySelector(".rounds");
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

        const score = document.querySelector(".score");
        const result = document.createElement("p");
           
        if (humanChoice == computerChoice) {
            result.textContent = "Tie! " + humanChoice + " vs. " + computerChoice;
            rounds.prepend(result);
        } else if (humanChoice == "Rock" && computerChoice == "Paper" || humanChoice == "Paper" && computerChoice == "Scissors" || humanChoice == "Scissors" && computerChoice == "Rock") {
            result.textContent = "Point for JS! " + humanChoice + " vs. " + computerChoice;
            rounds.prepend(result);
            computerScore++;  // score increment
        } else if (humanChoice == "Rock" && computerChoice == "Scissors" || humanChoice == "Paper" && computerChoice == "Rock" || humanChoice == "Scissors" && computerChoice == "Paper") {
            result.textContent = "Point for You! " + humanChoice + " vs. " + computerChoice;
            rounds.prepend(result);
            humanScore++; // score increment
        } 
        roundCounter++;  // increment round counter
        round.textContent = "Round: " + roundCounter;
        
        score.textContent = "You: " + humanScore + " vs. " + " JS: " + computerScore;


        if (computerScore === 5) {
            score.textContent = "YOU LOSE!";
            score.classList.add("loser");
            setGameOver();

        } else if (humanScore === 5) {
            score.textContent = "YOU WIN!";
            score.classList.add("winner");
            setGameOver();
            } 
        
        function setGameOver() {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
            resetButton = document.createElement("button");
            resetButton.textContent = "Play Again...";
            rounds.prepend(resetButton);
            resetButton.addEventListener("click", resetGame);
        }

        function resetGame() {
            score.textContent = "Click a button to play...";
            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;
            humanScore = 0;
            computerScore = 0;
            roundCounter = 1;
            round.textContent = "Round: " + roundCounter;
            score.textContent = "You: 0 vs. JS: 0";
            rounds.textContent = "";
            
        }

}

