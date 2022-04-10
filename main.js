// Store all user input EXCEPT the inital setting of the number of milliseconds and conversion to seconds
const numArr = [];

const numFrequency = {};

let seconds;

let milliseconds;



//On Load Prompt
window.onload = function() { // 
  seconds = prompt("Please input the amount of time in seconds between emitting numbers and their frequency");
  convert();
}

// Convert user input to milliseconds and display on screen
function convert() {
  convertToMilliseconds = seconds * 1000 // Convert the user input from seconds to milliseconds
  milliseconds = convertToMilliseconds // Store converted value in milliseconds variable
  NumberPrompt()
}

function NumberPrompt() {
  let firstNum = prompt("Please enter the first number");
  numArr.push(firstNum); // store the first number in numArr array
  let nextNum = prompt("Please enter the next number");
  numArr.push(nextNum);
  countNumFrequency();
}


// Count the frequency of the numbers stored in numFrequency Object
function countNumFrequency() {
  // console.log("arrived")
  for (const num of numArr) {
    if (numFrequency[num]) {
      numFrequency[num] += 1;
    } else {
      numFrequency[num] = 1;
    }
  }

  let oneFrequency = Object.values(numFrequency).includes(1); // see if the object includes 1 as its value

  // If the value is equal to 1, only display the number 
  if (oneFrequency) {
    for (const [key] of Object.entries(numFrequency)) {
      let para = document.getElementById("interval"); // Select paragraph with the ID of "interval"
      para.innerText = `${key}` // Add text to the paragraph with the userInput stored in seconds variables
      document.body.appendChild(para); // Append the text to be displayed on screen
      // console.log(`${key}`);
    }

  } else { // If the value is not equal to 1, display the number and its value/frequency
      for (const [key, value] of Object.entries(numFrequency)) {
        let para = document.getElementById("interval"); // Select paragraph with the ID of "interval"
        para.innerText = `${key}: ${value}` // Add text to the paragraph with the userInput stored in seconds variables
        document.body.appendChild(para); // Append the text to be displayed on screen
        // console.log(`${key}: ${value}`);
      }
  
  }

  function timer() {
  let number = document.getElementById("number");
  setInterval(function() {number.innerHTML += "Hello"}, milliseconds);
}
  
  // for (const [key, value] of Object.entries(numFrequency)) {
  //   let para = document.getElementById("interval"); // Select paragraph with the ID of "interval"
  //   para.innerText = `${key}: ${value}` // Add text to the paragraph with the userInput stored in seconds variables
  //   document.body.appendChild(para); // Append the text to be displayed on screen
  //   console.log(`${key}: ${value}`);
  // }


  


   // let para = document.getElementById("interval"); // Select paragraph with the ID of "interval"
  // para.innerText = `Your selected timer inverval is: ${seconds} seconds` // Add text to the paragraph with the userInput stored in seconds variables
  // document.body.appendChild(para); // Append the text to be displayed on screen
  
}


// function timer() {
//   let number = document.getElementById("number");
//   setInterval(function() {number.innerHTML += "Hello"}, milliseconds);
// }





// function firstNumberPrompt() {
//   let delayInMilliseconds = milliseconds - (milliseconds / 2) //

//   // delay prompt by the value of delayInMilliseconds
//   setTimeout(function() {
//     let firstNum = prompt("Please enter the first number");
//     numInput.push(firstNum); // store the first number in numInput array
//   }, delayInMilliseconds);

//   additionalNumberPrompt();
// }


function startTimer() {

}



function displayOrQuitNumbers() {
  let number = document.getElementById("number");
  let intervalNumber = setInterval(function() {number.innerHTML += `${allInput[0]}`}, milliseconds);

  // select button with id 'quit and perform function when clicked
  quit = document.getElementById('quit').onclick = function() { 
    alert("Thank you for playing the game"); // Thank you message when 'quit' button is clicked
    clearInterval(intervalNumber); // Stop setInterval function when 'quit' button is clicked

    // select paragraph with id 'timer' and remove all text when 'quit' button is clicked
    let para = document.getElementById("interval");
    para.innerText = " ";
    document.body.appendChild(para);

    let numPara = document.getElementById("number");
    numPara.innerText = " ";
    document.body.appendChild(numPara);
    }
}

 // let delayInMilliseconds = milliseconds - (milliseconds / 2) //

  // delay prompt by the value of delayInMilliseconds
  // setTimeout(function() {
    
  // }, delayInMilliseconds);

  // let para = document.getElementById("interval"); // Select paragraph with the ID of "interval"
  // para.innerText = `Your selected timer inverval is: ${seconds} seconds` // Add text to the paragraph with the userInput stored in seconds variables
  // document.body.appendChild(para); // Append the text to be displayed on screen