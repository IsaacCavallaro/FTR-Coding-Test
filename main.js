
// Store inital user input for setting the number of milliseconds in array - global scope
let milliseconds = [];

// Store conversion of milliseconds to seconds in array - global scope
let secondsArray = [];

// Store all user input EXCEPT the inital setting of the number of milliseconds and conversion to seconds
let allInput = [];

let seconds;

// Function runs when user clicks 'Start Here!' button
function startGame() {
  let timerInput = prompt("Please input the amount of time in seconds between emitting numbers and their frequency"); // Store the user input in a variable
  milliseconds.push(timerInput); // Push the user input into the milliseconds array for global scope
  displayTimer(); // call displayTimer function
}

// Function to display user input for timer on screen
function displayTimer() {
    let para = document.getElementById("timer"); // Select paragraph with the ID of "timer"
    para.innerText = `Your selected timer inverval is: ${milliseconds[0]} seconds` // Add text to the paragraph with the userInput stored in timer array
    document.body.appendChild(para); // Append the text to be displayed on screen
    conversion(); // Call conversion function
}

function conversion() {
  convertToSeconds = milliseconds[0] * 1000 // Convert the user input from milliseconds to seconds
  secondsArray.push(convertToSeconds); // Push the covertToSeconds value to seconds array for global scope
  seconds = secondsArray[0]
  // console.log(`this is ${seconds}`)
  firstNumPrompt()
}

function firstNumPrompt() {
  let numPrompt = prompt("Please enter the first number");
  allInput.push(numPrompt);
  setInterval(displayNumPrompt, seconds);
}


// function displayNumPrompt() {
//   document.getElementById("number").innerHTML += "Hello";
// }



