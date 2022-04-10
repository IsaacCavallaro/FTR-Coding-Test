// Store all user input EXCEPT the inital setting of the number of milliseconds and conversion to seconds
const numArr = [];

const numFrequency = {};

let seconds;

let milliseconds;

let fibNum;

// if user click quit stop game
// else if user click halt  

window.onload = function() {
  alert("click start to start game")
}

function quit() {
  alert("Thanks for playing");
  return;
}

function startGame() {
  seconds = prompt("Please input the amount of time in seconds between emitting numbers and their frequency");

  // If user clicks "Cancel" on prompt, stop execution
  if (seconds === null) {
    alert("click quit to stop game")
    return;
  }
  else {
    convert(); // Call convert function
  }
}

// Convert user input from seconds to milliseconds
function convert() {
  convertToMilliseconds = seconds * 1000 // Convert the user input from seconds to milliseconds
  milliseconds = convertToMilliseconds // Store converted value in milliseconds variable
  firstNumPrompt() // Call firstNumPrompt function
}

// Prompt user for first number
function firstNumPrompt() {
  setTimeout(function() {
    let firstNum = prompt("Please enter the first number");

    if (firstNum === null) { // If user clicks "Cancel" on prompt, stop execution
      alert("click quit to stop game")
      return;
    } else if (firstNum == fibNum){ // Alert User if the number is part of the Fibonacci sequence
      alert("FIB")
      numArr.push(firstNum); // Store firstNum in numArr
      nextNumPrompt() // Call nextNumPrompt function
    }
    else {
      numArr.push(firstNum); // Store firstNum in numArr
      nextNumPrompt() // Call nextNumPrompt function
    }
  }, 2000); // Wait
}

function nextNumPrompt() {
  let myInterval = setInterval(function() {
    let nextNum = prompt("Please enter the next number");

    if (nextNum === null) { // If user clicks "Cancel" on prompt, stop execution
      alert("click quit to stop game")
      return;
    } else if (nextNum === fibNum){
        alert("FIB")
        numArr.push(nextNum); // Store nextNum in numArr
        countNumFrequency();
        clearInterval(myInterval); // Stop myInterval 
    } else {
        numArr.push(nextNum);// Store nextNum in numArr
        countNumFrequency();
        clearInterval(myInterval);  // Stop myInterval 
    }
  }, 2000); // Wait
  console.log(numArr)
}

// Count the frequency of the numbers stored in numFrequency Object
function countNumFrequency() {

  // loop over object and set values to 0 
  for (const property in numFrequency) {
    numFrequency[property] = 0;
  }

  
  for (const num of numArr) { // Loop over numArr
    if (numFrequency[num]) {
      numFrequency[num] += 1;
    } else {
      numFrequency[num] = 1;
    }
  }
  displayNum()
}

function displayNum() {
  // Display number and frequency with appropriate seconds delay from seconds prompt
  for (const [key, value] of Object.entries(numFrequency)) {
    setInterval(function() {
      let para = document.getElementById("interval"); // Select paragraph with the ID of "interval"
      para.innerText = `${key}: ${value}` // Add text to the paragraph with the userInput stored in seconds variables
      document.body.appendChild(para);
      }, milliseconds);
      console.log(numFrequency);
      console.log(numArr)
      nextNumPrompt();
  }
}

function finaltNumPrompt() {
  console.log(numFrequency)
  let myInterval = setInterval(function() {
    let nextNum = prompt("Please enter the next number");

    if (nextNum === null) { // If user clicks "Cancel" on prompt, stop execution
      alert("click quit to stop game")
      return;
    } else if (nextNum === fibNum){
        alert("FIB")
        numArr.push(nextNum); // Store nextNum in numArr
        countNumFrequency();
        clearInterval(myInterval); // Stop myInterval 
    } else {
        numArr.push(nextNum);// Store nextNum in numArr
        countNumFrequency();
        clearInterval(myInterval);  // Stop myInterval 
    }
  }, 3000); // Wait
}


// function displayOrQuitNumbers() {
//   // let number = document.getElementById("number");
//   // let intervalNumber = setInterval(function() {number.innerHTML += `${allInput[0]}`}, milliseconds);

//   // select button with id 'quit and perform function when clicked
//   quit = document.getElementById('quit').onclick = function() { 
//     alert("Thank you for playing the game"); // Thank you message when 'quit' button is clicked
//     clearInterval(intervalNumber); // Stop setInterval function when 'quit' button is clicked

//     // select paragraph with id 'timer' and remove all text when 'quit' button is clicked
//     let para = document.getElementById("interval");
//     para.innerText = " ";
//     document.body.appendChild(para);

//     let numPara = document.getElementById("number");
//     numPara.innerText = " ";
//     document.body.appendChild(numPara);
//     }
// }

 // let delayInMilliseconds = milliseconds - (milliseconds / 2) //

  // delay prompt by the value of delayInMilliseconds
  // setTimeout(function() {
    
  // }, delayInMilliseconds);

  // let para = document.getElementById("interval"); // Select paragraph with the ID of "interval"
  // para.innerText = `Your selected timer inverval is: ${seconds} seconds` // Add text to the paragraph with the userInput stored in seconds variables
  // document.body.appendChild(para); // Append the text to be displayed on screen


  // //On Load Prompt
// window.onload = function() { // 
//   setTimeout(function() {
//     seconds = prompt("Please input the amount of time in seconds between emitting numbers and their frequency");
//     convert();
//   }, 1000); //Wait one second after page is loaded for prompt
// }

// setInterval(function() {
//   let nextNum = prompt("Please enter the next number");

//   if (nextNum === null) { // If user clicks "Cancel" on prompt, stop execution
//     return;
//   } else if (nextNum === fibNum){
//     alert("FIB")
//     numArr.push(nextNum); // Store nextNum in numArr
//   } else {
//     numArr.push(nextNum); // Store nextNum in numArr
//     nextNumPrompt() // Call nextNumPrompt function
//   }
// }, 2000);//Wait five seconds