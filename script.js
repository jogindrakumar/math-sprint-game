// Pages
const gamePage = document.getElementById("game-page");
const scorePage = document.getElementById("score-page");
const splashPage = document.getElementById("splash-page");
const countdownPage = document.getElementById("countdown-page");
// Splash Page
const startForm = document.getElementById("start-form");
const radioContainers = document.querySelectorAll(".radio-container");
const radioInputs = document.querySelectorAll("input");
const bestScores = document.querySelectorAll(".best-score-value");
// Countdown Page
const countdown = document.querySelector(".countdown");
// Game Page
const itemContainer = document.querySelector(".item-container");
// Score Page
const finalTimeEl = document.querySelector(".final-time");
const baseTimeEl = document.querySelector(".base-time");
const penaltyTimeEl = document.querySelector(".penalty-time");
const playAgainBtn = document.querySelector(".play-again");

// Equations
let questionAmount = 0;
let equationsArray = [];

// Game Page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

// Time

// Scroll

// Create Correct/Incorrect Random Equations
function createEquations() {
  // Randomly choose how many correct equations there should be
  // const correctEquations =
  // Set amount of wrong equations
  // const wrongEquations =
  // Loop through, multiply random numbers up to 9, push to array
  // for (let i = 0; i < correctEquations; i++) {
  //   firstNumber =
  //   secondNumber =
  //   const equationValue = firstNumber * secondNumber;
  //   const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
  //   equationObject = { value: equation, evaluated: 'true' };
  //   equationsArray.push(equationObject);
  // }
  // Loop through, mess with the equation results, push to array
  // for (let i = 0; i < wrongEquations; i++) {
  //   firstNumber =
  //   secondNumber =
  //   const equationValue = firstNumber * secondNumber;
  //   wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
  //   wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
  //   wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
  //   const formatChoice =
  //   const equation = wrongFormat[formatChoice];
  //   equationObject = { value: equation, evaluated: 'false' };
  //   equationsArray.push(equationObject);
  // }
}

// Dynamically adding correct/incorrect equations
// function populateGamePage() {
//   // Reset DOM, Set Blank Space Above
//   itemContainer.textContent = '';
//   // Spacer
//   const topSpacer = document.createElement('div');
//   topSpacer.classList.add('height-240');
//   // Selected Item
//   const selectedItem = document.createElement('div');
//   selectedItem.classList.add('selected-item');
//   // Append
//   itemContainer.append(topSpacer, selectedItem);

//   // Create Equations, Build Elements in DOM

//   // Set Blank Space Below
//   const bottomSpacer = document.createElement('div');
//   bottomSpacer.classList.add('height-500');
//   itemContainer.appendChild(bottomSpacer);
// }

//display 3,2,1  GO
function countdownStart() {
  countdown.textContent = "3";
  setTimeout(() => {
    countdown.textContent = "2";
  }, 1000);
  setTimeout(() => {
    countdown.textContent = "1";
  }, 2000);
  setTimeout(() => {
    countdown.textContent = "GO!";
  }, 3000);
}

//Navigate from splash page to countdown page
function showCountdown() {
  countdownPage.hidden = false;
  splashPage.hidden = true;
  countdownStart();
}

// Get the value from selected radion button
function getRadioValue() {
  let radioValue;
  radioInputs.forEach((radioInputs) => {
    if (radioInputs.checked) {
      radioValue = radioInputs.value;
    }
  });
  return radioValue;
}

// Form that decides amount of questions
function selectQuestionAmount(e) {
  e.preventDefault();
  questionAmount = getRadioValue();
  console.log("question amount ", questionAmount);
  if (questionAmount) {
    showCountdown();
  }
}
startForm.addEventListener("click", () => {
  radioContainers.forEach((radioEl) => {
    // Remove selected label styling
    radioEl.classList.remove("selected-label");
    //Add it back if radio is checked
    if (radioEl.children[1].checked) {
      radioEl.classList.add("selected-label");
    }
  });
});

// Event Listener
startForm.addEventListener("submit", selectQuestionAmount);
