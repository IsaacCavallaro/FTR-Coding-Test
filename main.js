// Covert input from type string to number

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let seconds = 0
let num = 0
let nextNumValue = 0;
let firstNum = document.getElementById("first-num")
let nextNum = document.getElementById("next-num")
let firstNumCount;
let incrementbtn = document.createElement("button"); 
let savebtn = document.createElement("button"); 
let firstNumSavebtn = document.createElement("button");
let fib = document.createElement("p");

let quitArr = [];


let paraDisplayNum;
let isHalt = false; // Used for halt and resume button logic
let displayInterval;

const numArr = [];
const numFrequency = {};


/////////////////////////////////////////////////////// QUIT, HALT, RESUME FUNCTIONS /////////////////////////////////////////////////////////

// Quit function
function quit() {
  // alert("Thank you for playing") // Thank you pop up message
  console.log("quit button clicked")
  quitDisplay(quitArr)
  clearInterval(displayInterval); // Stop timer when quit button is clicked
  // location.reload(); // Reload page when quit button is clicked
  return;
}

// Halt function
function halt() {
  isHalt = true; // Change isHalt to true 
  let haltText = document.createElement("p");  
  haltText.textContent = "timer halted";
  document.body.appendChild(haltText);
}

// Resume function
function resume() {
  isHalt = false; // Change isHalt to false
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
      console.log(num)
      isFibonacciFirst(num); // Call isFibonacci and pass num as a parameter

      // Remove increment button, save button, count and prompt text
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

/////////////////////////////////////////////////////// FIBONACCI SEQUENCE FIRST NUM CHECK /////////////////////////////////////////////////////////////////////

// returns true if x is perfect square
function isPerfectSquare(x) {
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}
 
// Returns true if num is a Fibonacci Number, else false
function isFibonacciFirst(num){
 
   if (isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)){
      let fib = document.createElement("p"); // Create a paragraph element
      fib.setAttribute("id","fib"); // Give the paragraph id of "fib"
      fib.textContent = "FIB "; // Set the text content of the paragrapht to "FIB"
      fib.style.display = "inline"; // Set fib paragraph to inline
      // document.body.appendChild(fib); // Append to the body
      document.getElementById("interval").appendChild(fib);

      nextNumPrompt() // Call nextNumPrompt when SAVE is clicked
      // countNumFrequency() // Call countNumFrequency when SAVE is clicked
   } 
   else {
    console.log("arrived: first num not fib")
    nextNumPrompt();
    // countNumFrequency();
   }
}
 
/////////////////////////////////////////////////////// NEXT NUMBER PROMPT /////////////////////////////////////////////////////////////////////

// Prompt user for next number
function nextNumPrompt() {

  ////// NEXT TO SET COUNT BACK TO 0 WITHOUT AFFECTING FIB CHECK

  nextNum.textContent = "Please enter your next number:";

  // Create count h2 and set to 0
  let nextNumCount = document.createElement("h2");
  nextNumCount.setAttribute("id","nextNumCount");
  nextNumCount.textContent = "0"
  document.getElementById("next-num-container").appendChild(nextNumCount); // append nextNumCount to "next-num-container"
  

  // Create INCREMENT button
  let nextIncrementbtn = document.createElement("button");
  nextIncrementbtn.setAttribute("id","nextIncrementbtn");
  nextIncrementbtn.textContent = "INCREMENT";
  document.getElementById("next-num-btn-wrapper").appendChild(nextIncrementbtn); // append nextIncrementbtn to "next-num-btn-wrapper"
  

  // INCREMENT button logic
  nextIncrementbtn.addEventListener("click", function () {
    nextNumValue += 1
    nextNumCount.textContent = nextNumValue
  });

  //Create SAVE button 
  let nextSavebtn = document.createElement("button");  
  nextSavebtn.textContent = "SAVE";
  nextSavebtn.setAttribute("id","nextNumSavebtn");
  document.getElementById("next-num-btn-wrapper").appendChild(nextSavebtn); // append nextSavebtn to "next-num-btn-wrapper"
  

  // SAVE button logic
  nextSavebtn.addEventListener("click", function () {
    numArr.push(nextNumValue); // Push nextNum to the end of numArr
    nextNumPrompt(); // Call nextNumPrompt when SAVE is clicked
    // countNumFrequency(); // Call countNumFrequency when SAVE is clicked
    isFibonacciNext(nextNumValue)

    nextIncrementbtn = document.getElementById("nextIncrementbtn"); // Select nextIncrementbtn
    nextIncrementbtn.remove();

    nextNumCount = document.getElementById("nextNumCount"); // Select nextNumCount
    nextNumCount.remove();

    nextNumSaveBtn = document.getElementById("nextNumSavebtn"); // Select nextNumSavebtn
    nextNumSaveBtn.remove();
    
  });
}

/////////////////////////////////////////////////////// FIBONACCI SEQUENCE NEXT NUM CHECK /////////////////////////////////////////////////////////////////////

// returns true if x is perfect square
function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return (s * s == x);
}

// Returns true if num is a Fibonacci Number, else false
function isFibonacciNext(nextNumValue){

  console.log(nextNumValue);
  // Remove elements
  nextIncrementbtn = document.getElementById("nextIncrementbtn"); // Select nextIncrementbtn
  nextIncrementbtn.remove();

  nextNumCount = document.getElementById("nextNumCount"); // Select nextNumCount
  nextNumCount.remove();

  nextNumSaveBtn = document.getElementById("nextNumSavebtn"); // Select nextNumSavebtn
  nextNumSaveBtn.remove();


 if (isPerfectSquare(5 * nextNumValue * nextNumValue + 4) || isPerfectSquare(5 * nextNumValue * nextNumValue - 4)){
    let fib = document.createElement("p"); // Create a paragraph element
    fib.setAttribute("id","fib"); // Give the paragraph id of "fib"
    fib.textContent = "FIB "; // Set the text content of the paragrapht to "FIB"
    fib.style.display = "inline"; // Set fib paragraph to inline
    // document.body.appendChild(fib); // Append to the body
    document.getElementById("interval").appendChild(fib);

    resetNextNumValue();
 } 
 else {
  console.log("arrived next num is not fib")
  resetNextNumValue();
 }
}

/////////////////////////////////////////////////////// RESET NEXT NUMBER TO 0 /////////////////////////////////////////////////////////////////////

function resetNextNumValue() {
  nextNumValue = 0;
  nextNumPrompt();
  countNumFrequency();
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

  sortNumFrequency(); // Call sortNumFrequency function
}

/////////////////////////////////////////////////////// SORT OBJECT IN DESCENDING ORDER  /////////////////////////////////////////////////////////////////////
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

  quitArr = sortable
  console.log(quitArr);

  // console.log(sortable.length)

  // If sortable length is greater than 0 
  if (sortable.length > 0) {
    clearInterval(displayInterval); // stop the interval timer to prevent repoducing multiple timers with old values
    display(sortable)
  }
  else {
    display(sortable)
  }
  // console.log(sortable) 
}

/////////////////////////////////////////////////////// DISPLAY NUMBER AND FREQUENCY VIA SET INTERVAL  /////////////////////////////////////////////////////////////////////


function display(sortable){
  displayInterval = setInterval(function() {
    if(!isHalt) { // if isHalt is false
      for (const element of sortable) { // Loop over sortable array or arrays
        console.log(element);
        paraDisplayNum = document.createElement("p"); // Create paragraph
        paraDisplayNum.style.display = "inline"; // Set paragraph to inline
        paraDisplayNum.textContent = `${element[0]}: ${element[1]}, ` ; // Display index 0 and 1 of each element
        document.body.appendChild(paraDisplayNum); // Append to body
        console.log(sortable);
      }
    }
  }, milliseconds);
}


function quitDisplay(quitArr) {

  for (const element of quitArr) { // Loop over quitArr array or arrays
    console.log(element);
    paraDisplayNum = document.createElement("p"); // Create paragraph
    paraDisplayNum.style.display = "inline"; // Set paragraph to inline
    paraDisplayNum.textContent = `${element[0]}: ${element[1]}, ` ; // Display index 0 and 1 of each element
    document.body.appendChild(paraDisplayNum); // Append to body
    console.log(quitArr);
  }

  quitMessage = document.createElement("p"); // Create paragraph
  quitMessage.style.display = "inline"; // Set paragraph to inline
  quitMessage.textContent = "Thanks for playing, press any key to exit." ; // Display index 0 and 1 of each element
  document.body.appendChild(quitMessage); // Append to body
  document.addEventListener('keypress', refresh);
  
}

function refresh() {
  location.reload(); // Reload page when quit button is clicked
}







    


  




