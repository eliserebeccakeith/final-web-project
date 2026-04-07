let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attemptsText = document.getElementById("attempts");

  const guess = Number(input.value);

  if (input.value === "" || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    message.textContent = "Correct! You guessed the number " + secretNumber + ".";
  } else if (guess < secretNumber) {
    message.textContent = "Too low. Try again.";
  } else {
    message.textContent = "Too high. Try again.";
  }

  attemptsText.textContent = "Attempts: " + attempts;
  input.value = "";
  input.focus();
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  document.getElementById("message").textContent = "Game restarted. Make a new guess.";
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
}