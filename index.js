// Function to check if a number is odd or even
function oddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Prompt user for input
let userInput = prompt("Enter a number:");

// Parse the input into an integer
let number = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
    // Call the function and print the result
    let result = oddOrEven(number);
    alert(`The number ${number} is ${result}.`);
} else {
    alert("Invalid input. Please enter a valid number.");
}

