// Get the display element and all button elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Initialize a variable to store the current calculation input
let currentInput = '';

// Add event listeners for each button
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.textContent; // Get the value of the clicked button

    if (value === 'C') {
      // If 'C' is clicked, clear the display and reset the input
      currentInput = '';
      display.value = '';
    } else if (value === '←') {
      // If '←' is clicked, remove the last character from input
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === '=') {
      // If '=' is clicked, evaluate the expression and show the result
      try {
        currentInput = eval(currentInput).toString(); // Use eval() to evaluate the math expression
        display.value = currentInput;
      } catch (error) {
        // If the expression is invalid, display 'Error'
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      // For other buttons (numbers and operators), append the value to the current input
      currentInput += value;
      display.value = currentInput; // Update the display with the current input
    }
  });
});