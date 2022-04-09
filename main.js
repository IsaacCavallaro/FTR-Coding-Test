
// Store inital user input for setting the number of seconds 
let timer = [];

// Store all user input EXCEPT the inital setting of the number of seconds
let allInput = []

// Function which runs when user clicks 'Start Here!' button
function startGame() {
  let timerInput = prompt("Please input the amount of time in seconds between emitting numbers and their frequency"); // Store the user input in a variable
  timer.push(timerInput); // Push the user input into the timer array
  // console.log(timer[0]);
  displayTimer();
}

// Function to display user input for timer on screen
function displayTimer() {
    let para = document.getElementById("timer"); // Select paragraph with the ID of "timer"
    para.innerText = `Your selected timer inverval is: ${timer[0]} seconds` // Add text to the paragraph with the userInput stored in timer array
    document.body.appendChild(para); // Append the text to be displayed on screen
    // setInvervalPrompt(); // Call setIntervalPrompt function
}

function setInvervalPrompt() {
  const countdown = setInterval(countdownPrompt, (timer[0]) * 1000); 
  let firstNumber = prompt("First Number");
  allInput.push(firstNumber); // Push the first number into the allInput array
  console.log("arrived")
}



function countdownPrompt() {
  console.log(allInput[0]);
}







// Function which runs after 'x' seconds  based on the user input
function repeatPromt() {

}





