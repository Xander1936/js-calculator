// Select the display screen and all buttons
const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');

// Array to store the sequence of button presses
let calculation = []
// String to represent the full expression for evaluation
let accumulativeCalculation

/**
 * Main calculation logic triggered by button clicks
 * @param {HTMLElement} button - The button element that was clicked
 */
function calculate(button) {
    const value = button.textContent;
    // console.log('clicked', button.textContent);
    
    // Handle the CLEAR button
    if (value === 'CLEAR') {
        calculation = []
        screenDisplay.textContent = '.'
    } 
    // Handle the equals button to evaluate the expression
    else if (value === '=') {
        if (accumulativeCalculation) {
            try {
                // Use eval to compute the mathematical expression
                // console.log('eval', accumulativeCalculation);
                const result = eval(accumulativeCalculation)
                screenDisplay.textContent = result
                // Store result for further operations
                calculation = [result.toString()]
                accumulativeCalculation = result.toString()
            } catch (e) {
                // Display error if evaluation fails
                screenDisplay.textContent = 'Error'
                calculation = []
            }
        }
    } 
    // Handle number and operator button clicks
    else {
        calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }
}

// Attach event listeners to all buttons
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));