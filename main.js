
// 
let milliseconds;

// Store conversion of milliseconds to seconds in array - global scope
let secondsArray = [];

// Store all user input EXCEPT the inital setting of the number of milliseconds and conversion to seconds
let allInput = [];

let seconds;

let halt = false;

let resume = false; 

// let quit = false;

let repeatDisplay;

let interval;

// Function runs when user clicks 'Start Here!' button
function startGame() {
  let timerInput = prompt("Please input the amount of time in seconds between emitting numbers and their frequency"); // Store the user input in timerInput variable
  milliseconds = timerInput
  displayTimer(); // call displayTimer function
}


// Function runs when user clicks 'halt' button
function haltGame() {
  halt = true;
}

// Function runs when user clicks 'resume' button
function resumeGame() {
  resume = true;
}

// Function to display user input for timer on screen
function displayTimer() {
    let para = document.getElementById("timer"); // Select paragraph with the ID of "timer"
    para.innerText = `Your selected timer inverval is: ${milliseconds[0]} seconds` // Add text to the paragraph with the userInput stored in timer array
    document.body.appendChild(para); // Append the text to be displayed on screen
    conversion(); // Call conversion function
}

function conversion() {
  convertToSeconds = milliseconds * 1000 // Convert the user input from milliseconds to seconds
  seconds = convertToSeconds
  console.log(`this is ${seconds}`)
  frequencyDisplay()
}

function frequencyDisplay() {
  const number = document.getElementById("number");
  let interval = setInterval(function() {number.innerHTML += `${milliseconds}`}, seconds);
  
  // select button with id 'quit and perform function when clicked
  quit = document.getElementById('quit').onclick = function() { 
    alert("Thank you for playing the game"); // Thank you message when 'quit' button is clicked
    clearInterval(interval); // Stop setInterval function when 'quit' button is clicked

    // select paragraph with id 'timer' and remove all text when 'quit' button is clicked
    let para = document.getElementById("timer");
    para.innerText = " ";
    document.body.appendChild(para);

    let numPara = document.getElementById("number");
    numPara.innerText = " ";
    document.body.appendChild(numPara);
    }
}

// function quitGame() {
//   quit = document.getElementById('quit').onclick = function() {
//   alert("button was clicked");
//   clearInterval(interval);
//   };
// }

  // // let interval = setInterval(repeatNumDisplay, seconds); // call setInterval and use callback displayNumPrompt to be called to the value of seconds
  // let numPrompt = prompt("Please enter the first number");
  // allInput.push(numPrompt); // Store the user input number in allInput array
  
 
  


function repeatNumDisplay() {

}




 
function next() {

}

// function quitGame() {
//   console.log("quit");
//   clearInterval(repeatDisplay);
// }  






