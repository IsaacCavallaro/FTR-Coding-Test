let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let seconds = 0
let num = 0
let firstNum = document.getElementById("first-num")
let nextNum = document.getElementById("next-num")
let firstNumCount;
let incrementbtn = document.createElement("button"); 
let paraDisplayNum;

const numArr = [];
const numFrequency = {};

function quit() {
  alert("Thank you for playing")
      clearInterval(displayInterval);
      location.reload();
      return;
}

function increment() {
  seconds += 1
  countEl.textContent = seconds
}

function save() {
  let secondsStr = seconds 
  saveEl.textContent += secondsStr
  countEl.textContent = seconds
  convert()
}

// Convert user input from seconds to milliseconds
function convert() {
  let convertToMilliseconds = seconds * 1000 // Convert the user input from seconds to milliseconds
  milliseconds = convertToMilliseconds // Store converted value in milliseconds variable
  console.log(milliseconds)
  firstNumPrompt() // Call firstNumPrompt function
}

// Prompt user for first number
function firstNumPrompt() {
  setTimeout(function() {
    firstNum.textContent = "Please enter your first number:";

    // Set create count and set to 0
    let firstNumCount = document.createElement("h2");
    firstNumCount.innerHTML = "0"
    document.body.appendChild(firstNumCount);
    
    // Add INCREMENT button
    incrementbtn.innerHTML = "INCREMENT";
    document.body.appendChild(incrementbtn);

    // INCREMENT button logic
    incrementbtn.addEventListener("click", function () {
      num += 1
      firstNumCount.textContent = num
    });

    //Create SAVE button 
    let savebtn = document.createElement("button");  
    savebtn.innerHTML = "SAVE";
    document.body.appendChild(savebtn);

    // SAVE button logic
    savebtn.addEventListener("click", function () {
      numArr.push(num);
      console.log(numArr);
      firstNumCount.textContent = 0 ;
      num = 0;
      nextNumPrompt() // Call nextNumPrompt when SAVE is clicked
      countNumFrequency() // Call countNumFrequency when SAVE is clicked
    });
  }, 2000); // Wait 2 seonds
}

// Prompt user for next number
function nextNumPrompt() {
  setTimeout(function() {
    nextNum.textContent = "Please enter your next number:";
  }, 2000); // Wait 2 seonds
}

// Count the frequency of the numbers stored in numFrequency Object
function countNumFrequency() {

  // Loop over numFrequency Object and set values to 0 
  for (const value in numFrequency) {
    numFrequency[value] = 0;
  }

  for (const num of numArr) { // Loop over numArr 
    if (numFrequency[num]) { // Each time we loop, If the num is found in numFrequency Object add 1
      numFrequency[num] += 1;
    } else {                
      numFrequency[num] = 1; // Else set number to 1
    }
  }
  displayNum()
}

function displayNum() {
  for (const [key, value] of Object.entries(numFrequency)) {
    paraDisplayNum = document.createElement("p");
    paraDisplayNum.innerText = `${key}: ${value}` // Add text to the paragraph with the userInput stored in seconds variables
  }

  displayInterval = setInterval(function() {
    document.body.appendChild(paraDisplayNum); // Display key and value on screen
  }, milliseconds); // Delay based on first prompt (seconds variable)

}


// // Store all user input EXCEPT the inital setting of the number of milliseconds and conversion to seconds
// const numArr = [];

// const numFrequency = {};

// let seconds;

// let milliseconds;

// let fibNum;

// let displayInterval;

// // if user click quit stop game
// // else if user click halt  

// window.onload = function() {
//   alert("click start to start game")
// }

// function quit() {
//   alert("Thanks for playing");
//   return;
// }

// function startGame() {
//   seconds = prompt("Please input the amount of time in seconds between emitting numbers and their frequency");

//   // If user clicks "Cancel" on prompt, stop execution
//   if (seconds === null) {
//     alert("click quit to stop game")
//     return;
//   }
//   else {
//     convert(); // Call convert function
//   }
// }

// // Convert user input from seconds to milliseconds
// function convert() {
//   convertToMilliseconds = seconds * 1000 // Convert the user input from seconds to milliseconds
//   milliseconds = convertToMilliseconds // Store converted value in milliseconds variable
//   firstNumPrompt() // Call firstNumPrompt function
// }

// // Prompt user for first number
// function firstNumPrompt() {
//   setTimeout(function() {
//     let firstNum = prompt("Please enter the first number");

//     if (firstNum === null) { // If user clicks "Cancel" on prompt, stop execution
//       alert("click quit to stop game")
//       return;
//     } else if (firstNum == fibNum){ // Alert User if the number is part of the Fibonacci sequence
//       alert("FIB")
//       numArr.push(firstNum); // Store firstNum in numArr
//       nextNumPrompt() // Call nextNumPrompt function
//     }
//     else {
//       numArr.push(firstNum); // Store firstNum in numArr
//       nextNumPrompt() // Call nextNumPrompt function
//     }
//   }, 2000); // Wait
// }

// // Prompt user for next numbers
// function nextNumPrompt() {
//   let promptInterval = setInterval(function() {
//     let nextNum = prompt("Please enter the next number");

//     if (nextNum === null) { // If user clicks "Cancel" on prompt, stop execution
//       alert("click quit to stop game")
//       return;
//     } else if (nextNum === fibNum){
//         alert("FIB")
//         numArr.push(nextNum); // Store nextNum in numArr
//         countNumFrequency();
//         clearInterval(promptInterval); // Stop myInterval 
//     } else {
//         numArr.push(nextNum);// Store nextNum in numArr
//         countNumFrequency();
//         clearInterval(promptInterval);  // Stop myInterval 
//     }
//   }, 2000); // Wait
//   console.log(numArr)
// }

// // Count the frequency of the numbers stored in numFrequency Object
// function countNumFrequency() {

//   // Loop over numFrequency Object and set values to 0 
//   for (const value in numFrequency) {
//     numFrequency[value] = 0;
//   }

//   for (const num of numArr) { // Loop over numArr 
//     if (numFrequency[num]) { // Each time we loop, If the num is found in numFrequency Object add 1
//       numFrequency[num] += 1;
//     } else {                
//       numFrequency[num] = 1;
//     }
//   }
//   displayNum()
// }





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