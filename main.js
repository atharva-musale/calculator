// Global variables
let currentResult;
let displayedValue = '';
let value1 = '';
let value2 = '';
let operator = ''
let numberOfOperators = 0;

// Get DOM elements
const buttons = document.querySelectorAll('.button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.get-result');
const displayResult = document.querySelector('.display-output');
const keypad = document.querySelector('.buttons-container');
const clear = document.querySelector('.clear');

// Logic
numbers.forEach(btn => btn.addEventListener('click', (event) => {
    displayedValue = displayedValue + event.target.innerText;
    currentResult = eval(displayedValue);
    console.log(displayedValue);
    console.log(currentResult);
}));
operators.forEach(btn => btn.addEventListener('click', (event) => {
    displayedValue = displayedValue + event.target.innerText;
    currentResult = eval(currentResult);
    console.log(displayedValue);
}));

equals.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log(currentResult);
    displayResult.innerHTML = `${currentResult}`;
    displayedValue = '';
    currentResult = 0;
});

clear.addEventListener('click', (event) => {
    event.stopPropagation();
    displayedValue = '';
    currentResult = 0;
    displayResult.innerHTML = `${currentResult}`;
});

keypad.addEventListener('click', () => {
    displayResult.innerHTML = `<span>${displayedValue}</span>`;
});

// Helper functions
function isEven(n) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
}