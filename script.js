let randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 10;

function checkGuess() {
  attempts--;
  const inputElement = document.getElementById("guess");
  let guess = parseInt(inputElement.value); // Make sure the input is treated as a number
  const feedbackElement = document.getElementById("feedback");

  if (guess === randomNumber) {
    feedbackElement.innerHTML = "Success!";
    feedbackElement.style.color = "Green";
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = "Too low! Try again. Attempts left: " + attempts;
  } else {
    feedbackElement.innerHTML = "Too high! Try again. Attempts left: " + attempts;
  }

  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.innerHTML = "Game over. The correct number was " + randomNumber;
    feedbackElement.style.color = "Red";
  }
}
