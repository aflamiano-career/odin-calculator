const divide = (a, b) => {
    if (b === 0) {
        return 'Invalid'
    }
    return a / b;
}

const multiply = (a, b) => {
    return a * b;
}

const subtract = (a, b) => {
    return a - b;
}

const add = (a, b) => {
    return a + b;
}

const operate = (operator, num1, num2) => {
    switch(operator) {
        case '/':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '+':
            return add(num1, num2);
    }
}

console.log(operate('/', 1, 1));
console.log(operate('*', 1, 2));
console.log(operate('-', 1, 2));
console.log(operate('+', 1, 2));

const displayedMemory = document.querySelector('.js-display-memory');
const displayedTotal = document.querySelector('.js-display-total');
const displayedInput = document.querySelector('.js-display-input');

displayedMemory.innerText = '0';
displayedTotal.innerText = '2';
displayedInput.innerText = '1+1';