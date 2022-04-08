

// Set empty array to store all user input
let allInput = []

// Function which runs when user clicks 'Start Here!' button
function startGame() {
    userInput = prompt("Please input the amount of time in seconds between emitting numbers and their frequency"); // Store the user input in a variable
    allInput.push(userInput); // Push the user input into the allInput array
    // console.log(allInput[0]);
    displayUserInput();
}

// Function to display user input on screen
function displayUserInput() {
    let para = document.createElement("p");
    para.innerText = allInput[0];
    document.body.appendChild(para);
}



// Function which runs after 'x' seconds  based on the user input
function repeatPromt() {

}





