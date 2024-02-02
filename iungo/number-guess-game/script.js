class Game {
  constructor() {
    this.secretNumber = this.generateRandomNumber();
    this.maxAttempts = 3;
    this.attempts = 0;
    this.displayMessage("Guess the Number between 1 and 10");
  }

  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Secret Number: ${randomNumber}`);
    return randomNumber;
  }

  checkGuess(guess) {
    this.attempts++;

    if (this.attempts > this.maxAttempts) {
      this.displayMessage(
        `Out of attempts! The correct number was ${this.secretNumber}.`
      );
      this.resetGame();
      return;
    }

    const difference = Math.abs(this.secretNumber - guess);

    if (difference === 0) {
      this.displayMessage(
        `Congratulations! You guessed the correct number in ${this.attempts} attempts.`
      );
      this.resetGame();
    } else {
      let hint = "";

      if (difference <= 2) {
        hint = "Very close! ";
      } else if (difference <= 5) {
        hint = "Close! ";
      } else {
        hint = "Cold! ";
      }

      this.displayMessage(
        `${hint}Wrong guess. Try again! (Attempts: ${this.attempts})`
      );
    }
  }

  resetGame() {
    this.secretNumber = this.generateRandomNumber();
    this.attempts = 0;
    this.displayMessage("Guess the Number between 1 and 10");
  }

  displayMessage(message) {
    document.getElementById("game-title").innerText = message;
  }
}

// Initialize the game
const game = new Game();

// Event listener for the guess button
document.getElementById("guessButton").addEventListener("click", function () {
  const guessInput = document.getElementById("guessInput");
  const userGuess = parseInt(guessInput.value);

  if (!isNaN(userGuess)) {
    game.checkGuess(userGuess);
  } else {
    game.displayMessage("Please enter a valid number.");
  }

  // Clear the input field
  guessInput.value = "";
});

// Event listener for the reset button
document.getElementById("resetButton").addEventListener("click", function () {
  game.resetGame();
});
