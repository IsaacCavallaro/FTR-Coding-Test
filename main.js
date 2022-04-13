// Covert input from type string to number
// Resume button bug (delete what's on page if resumed?)
// Print all numbers to screen when quit clicked
// Need to remove FIB text when save is clicked


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let seconds = 0
let num = 0
let firstNum = document.getElementById("first-num")
let nextNum = document.getElementById("next-num")
let firstNumCount;
let incrementbtn = document.createElement("button"); 
let savebtn = document.createElement("button"); 
let firstNumSavebtn = document.createElement("button");
let fib = document.createElement("p");


let paraDisplayNum;
let isHalt = false; // Used for halt and resume button logic
let displayInterval;

const numArr = [];
const numFrequency = {};

/////////////////////////////////////////////////////// QUIT, HALT, RESUME FUNCTIONS /////////////////////////////////////////////////////////

// Quit function
function quit() {
  alert("Thank you for playing")
    clearInterval(displayInterval);
    location.reload();
    return;
}

// Halt function
function halt() {
  isHalt = true;
  let haltText = document.createElement("p");  
  haltText.textContent = "timer halted";
  document.body.appendChild(haltText);
}

// Resume function
function resume() {
  isHalt = false;
  let resumeText = document.createElement("p");  
  resumeText.textContent = "timer resumed";
  document.body.appendChild(resumeText);

  nextIncrementbtn = document.getElementById("nextIncrementbtn"); // Select nextIncrementbtn
  nextIncrementbtn.remove();

  nextNumCount = document.getElementById("nextNumCount"); // Select nextNumCount
  nextNumCount.remove();

  nextNumSaveBtn = document.getElementById("nextNumSavebtn"); // Select nextNumSavebtn
  nextNumSaveBtn.remove();

  nextNumPrompt()
}

/////////////////////////////////////////////////////// INITIAL INCREMENT AND SAVE BUTTONS /////////////////////////////////////////////////////////

// Initial Increment function runs when increment-btn is clicked
function increment() {
  seconds += 1 // increment seconds by 1 each time increment-btn is clicked
  countEl.textContent = seconds // Set count-el text to the value seconds each time increment-btn is clicked
}

// Initial Save function runs when save-btn is clicked
function save() {
  // Select element with id "save-btn" and remove when save-btn is clicked
  let saveBtn = document.getElementById("save-btn"); 
  saveBtn.remove();

  // Select element with id "increment-btn" and remove when save-btn is clicked
  let incrementBtn = document.getElementById("increment-btn");
  incrementBtn.remove();

  // Select element with id "frequency" and remove when save-btn is clicked
  let frequencyPara = document.getElementById("frequency");
  frequencyPara.remove();

  // Select element with id "count-el" and remove when save-btn is clicked
  countEl = document.getElementById("count-el");
  countEl.remove();

  // Call convert function to convert input to milliseconds for setInterval
  convert()
}


/////////////////////////////////////////////////////// CONVERT SECONDS TO MILLISECONDS /////////////////////////////////////////////////////////


// Convert user input from seconds to milliseconds
function convert() {
  let convertToMilliseconds = seconds * 1000 // Convert the user input from seconds to milliseconds
  milliseconds = convertToMilliseconds // Store converted value in milliseconds variable
  console.log(milliseconds)
  firstNumPrompt() // Call firstNumPrompt function
}

/////////////////////////////////////////////////////// FIRST NUMBER PROMPT /////////////////////////////////////////////////////////////////////

// Prompt user for first number
function firstNumPrompt() {
    firstNum.textContent = "Please enter your first number:"; // Set text of firstNum 
    firstNum.setAttribute("id","firstNum") // Create id for styling

    // Create Count h2 and set to 0
    let firstNumCount = document.createElement("h2"); // Create h2 
    firstNumCount.textContent = "0" // Set the H2 text to 0
    firstNumCount.setAttribute("id","firstNumCount") // Give the h2 an id for styling
    document.getElementById("first-num-container").appendChild(firstNumCount); // append firstNumCount to "first-num-container"
    
    
    // Create INCREMENT button with id of "firstNumIncrementbtn"
    incrementbtn.textContent = "INCREMENT"; // Set text of incrementbtn to "INCREMENT"
    incrementbtn.setAttribute("id","firstNumIncrementbtn"); // Create id="firstNumIncrementbtn" 
    document.getElementById("first-num-btn-wrapper").appendChild(incrementbtn); // append incrementbtn to "first-num-btn-wrapper"

    // INCREMENT button logic
    incrementbtn.addEventListener("click", function () {
      num += 1 // Add one to num after each click
      firstNumCount.textContent = num // Make the text content of firstNumCount equal to the number of clicks on incrementbtn
    });

    //Create SAVE button with id of firstNumSavebtn 
    savebtn.textContent = "SAVE"; // Set text of savebtn to "SAVE"
    savebtn.setAttribute("id","firstNumSavebtn"); // Give an id for styling
    document.getElementById("first-num-btn-wrapper").appendChild(savebtn); // append savebtn to "first-num-btn-wrapper"

    // SAVE button logic
    savebtn.addEventListener("click", function () {
      numArr.push(num); // Push num to the end of numArr
      isFibonacci(num); // Call isFibonacci and pass num as a parameter

      incrementbtn = document.getElementById("firstNumIncrementbtn"); // Select firstNumIncrementbtn
      incrementbtn.remove()

      firstNumSavebtn = document.getElementById("firstNumSavebtn"); // Select firstNumSavebtn
      firstNumSavebtn.remove(); 

      firstNumCount = document.getElementById("firstNumCount"); // Select firstNumCount  
      firstNum.remove(); 

      firstNum = document.getElementById("firstNum"); // Select firstNum
      firstNumCount.remove();

    });
}

/////////////////////////////////////////////////////// FIBONACCI SEQUENCE CHECK /////////////////////////////////////////////////////////////////////

// Fib function
const isFibonacci = (num, count = 1, last = 0) => { // 

  if(count < num){
    isFibonacci(num, count+last, count);
  };
  if(count === num){
      let fib = document.createElement("p"); // Create a paragraph element
      fib.setAttribute("id","fib"); // Give the paragraph id of "fib"
      fib.textContent = "FIB "; // Set the text content of the paragrapht to "FIB"
      fib.style.display = "inline"; // Set fib paragraph to inline
      // document.body.appendChild(fib); // Append to the body
      document.getElementById("interval").appendChild(fib);
      nextNumPrompt() // Call nextNumPrompt when SAVE is clicked
      countNumFrequency() // Call countNumFrequency when SAVE is clicked
  }
  return
};

/////////////////////////////////////////////////////// NEXT NUMBER PROMPT /////////////////////////////////////////////////////////////////////

// Prompt user for next number
function nextNumPrompt() {
  nextNum.textContent = "Please enter your next number:";
  num = 0

  // Create count h2 and set to 0
  let nextNumCount = document.createElement("h2");
  nextNumCount.setAttribute("id","nextNumCount");
  nextNumCount.textContent = num
  document.getElementById("next-num-container").appendChild(nextNumCount); // append nextNumCount to "next-num-container"
  

  // Create INCREMENT button
  let nextIncrementbtn = document.createElement("button");
  nextIncrementbtn.setAttribute("id","nextIncrementbtn");
  nextIncrementbtn.textContent = "INCREMENT";
  document.getElementById("next-num-btn-wrapper").appendChild(nextIncrementbtn); // append nextIncrementbtn to "next-num-btn-wrapper"
  

  // INCREMENT button logic
  nextIncrementbtn.addEventListener("click", function () {
    num += 1
    nextNumCount.textContent = num
  });

  //Create SAVE button 
  let nextSavebtn = document.createElement("button");  
  nextSavebtn.textContent = "SAVE";
  nextSavebtn.setAttribute("id","nextNumSavebtn");
  document.getElementById("next-num-btn-wrapper").appendChild(nextSavebtn); // append nextSavebtn to "next-num-btn-wrapper"

  // SAVE button logic
  nextSavebtn.addEventListener("click", function () {
    numArr.push(num); // Push num to the end of numArr
    num = 0;
    isFibonacci();
    nextNumPrompt(); // Call nextNumPrompt when SAVE is clicked
    countNumFrequency(); // Call countNumFrequency when SAVE is clicked

    nextIncrementbtn = document.getElementById("nextIncrementbtn"); // Select nextIncrementbtn
    nextIncrementbtn.remove();

    nextNumCount = document.getElementById("nextNumCount"); // Select nextNumCount
    nextNumCount.remove();

    nextNumSaveBtn = document.getElementById("nextNumSavebtn"); // Select nextNumSavebtn
    nextNumSaveBtn.remove();
    
  });
}

/////////////////////////////////////////////////////// SET VALUES FOR OBJECT: numFrequency /////////////////////////////////////////////////////////////////////

// Count the frequency of the numbers stored in numFrequency Object
function countNumFrequency() {

  // Loop over numFrequency Object and set values to 0 
  for (const value in numFrequency) {
    numFrequency[value] = 0;
  }

  for (const num of numArr) { // Loop over numArr 
    if (numFrequency[num]) { // Each loop, If the num is found in numFrequency Object, add 1 
      numFrequency[num] += 1;
    } else {                
      numFrequency[num] = 1; // Else set number to 1
    }
  }

  sortNumFrequency();
}

/////////////////////////////////////////////////////// SORT OBJECT IN DESCENDING ORDER AND DISPLAY AT SETINVERVAL /////////////////////////////////////////////////////////////////////
function sortNumFrequency() {
  let sortable = []; // Set empty array to store arrays containing userInput and frequency 
 
  for (var userInput in numFrequency) { // Loop over numFrequency object
    sortable.push([userInput, numFrequency[userInput]]); // Add array to sortable array
  } 

  console.log(numFrequency);
  console.log(sortable);

  // Sort in descending order
  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });

  console.log(sortable);

  for (const element of sortable) {
    console.log(element);
    displayInterval = setInterval(function() {
      if(!isHalt) {
        paraDisplayNum = document.createElement("p"); // Create paragraph
        paraDisplayNum.style.display = "inline"; // Set paragraph to inline
        paraDisplayNum.innerText = `${element[0]}: ${element[1]}, ` ;
        document.body.appendChild(paraDisplayNum);
      }
    }, milliseconds);
  }
}
