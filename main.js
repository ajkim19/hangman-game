const wordList = [
  "JAVASCRIPT",
  "PROPERTY",
  "TENNIS",
  "HISTORIAN",
  "PHOTO",
  "DECISION",
  "EXTENT",
  "EXAMINATION",
  "SUPERMARKET",
  "ANIME",
  "BRUIN",
  "RESPONSE",
  "GOVERNMENT",
  "MEMORY",
  "VIDEO",
  "ENVIRONMENT",
  "COLUMN",
  "BREAD",
  "MOVIE",
  "ESTABLISHMENT",
];

const guessField = document.querySelector(".guess-field");
if (!guessField) throw new Error("guessField does not exist");
const guessSubmit = document.querySelector(".guess-submit");
if (!guessSubmit) throw new Error("guessSubmit does not exist");
let numAttempts = document.querySelector(".number-of-attempts");
if (!numAttempts) throw new Error("numAttempts does not exist");
let mysteryWordBlank = document.querySelector(".mystery-word-blank");
if (!mysteryWordBlank) throw new Error("mysteryWordBlank does not exist");
let mysteryWordReveal = document.querySelector(".mystery-word-reveal");
if (!mysteryWordReveal) throw new Error("mysteryWordReveal does not exist");
const gallows = document.querySelector(".gallows");
if (!gallows) throw new Error("gallows does not exist");
const lastWords = document.querySelectorAll(".last-words");
if (!lastWords) throw new Error("lastWords does not exist");
let attemptCount = 0;
let letterCount = 0;
let lettersUsed = [];
let mysteryWord = "";

function isALetter(data) {
  return /^[a-zA-Z]+$/.test(data);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function turnReset() {
  guessField.value = "";
  guessField.select();
}

function wordRandomizer(wordList) {
  const randomNumber = Math.floor(Math.random() * 20);
  return wordList[randomNumber];
}

function prepGame() {
  mysteryWord = wordRandomizer(wordList);
  for (let i = 0; i < mysteryWord.length; i++) {
    mysteryWordBlank.innerHTML += `<h2 id=mystery-letter-${
      i + 1
    } class="mystery-letter-reveal">${mysteryWord[i]}</h2>`;
    mysteryWordReveal.innerHTML += `<h2 class="mystery-letter-blank">&nbsp;&nbsp;&nbsp;&nbsp;</h2>`;
  }
  turnReset();
}

prepGame();
console.log("It's " + mysteryWord + "... cheater...");

// Start game
async function checkGuess() {
  // Retrieve the letter that user submitter
  const userGuess = guessField.value.toUpperCase();

  // Check if the letter is a letter in the alphabet
  if (isALetter(userGuess) === false) {
    alert("Attempts are limited to letters from A-Z. Please try again.");
    turnReset();
    return;
  }

  for (const letter of lettersUsed) {
    if (userGuess === letter) {
      alert("You have already entered this let. Please try again");
      turnReset();
      return;
    }
  }

  lettersUsed.push(userGuess);

  // Check if the letter is present within the mystery word
  let letterExists = false;
  for (let i = 0; i < mysteryWord.length; i++) {
    if (userGuess === mysteryWord[i]) {
      document.querySelector(`#mystery-letter-${i + 1}`).style.opacity = 100;
      letterExists = true;
      turnReset();
      letterCount++;
    }
  }

  // Condition if the letter is not present
  if (letterExists === false) {
    // Increase the number of attempts made
    attemptCount++;
    numAttempts.textContent = `${attemptCount}/7`;

    // const bodyPart = Array.prototype.slice.call(
    //   bodyPart = document.querySelectorAll(`#body-part-${attemptCount}`)
    // );
    // bodyPart.forEach((e) => {
    //   e.style.opacity = 0;
    // });

    document.getElementById(`body-part-${attemptCount}`).style.opacity = 0;

    document.querySelector(
      ".discard-letter"
    ).innerHTML += `<h3>${userGuess}</h3>`;

    if (attemptCount === 7) {
      guessSubmit.disabled = true;

      for (let i = 0; i < lastWords.length; i++) {
        lastWords[i].style.opacity = 100;
      }
      await sleep(25);
      if (confirm("I'm sorry. You lost. :( Want to try again?")) {
        // Restart the program
        prepGame();
        history.go(0);
        return;
      } else {
      }
    }
  }

  // Checks to see if the words has been solved
  if (letterCount === mysteryWord.length) {
    await sleep(25);
    if (confirm("Congratulations, you solved it! Want to play again?")) {
      // Restart the program
      prepGame();
      history.go(0);
      return;
    } else {
    }
  }
  turnReset();
}

guessSubmit.addEventListener("click", checkGuess);
