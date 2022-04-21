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
displayedInput.innerText = '';

// const displayTotal

const mainKeypad = document.querySelector('.js-main-keypad');
const mainKeys = mainKeypad.querySelectorAll('button');
let numberValues = [];
let numberSets = [];
let operations = [];
let fullDisplay = [];

const deleteFunction = () => {
    numberValues.pop();
    fullDisplay.pop();
    displayedInput.innerText = fullDisplay.join('');
}

const buttonDelete = document.querySelector('.btn-delete');
buttonDelete.addEventListener('click', deleteFunction);

mainKeys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let keyValue = e.target.value;
        // console.log(keyValue);
        if (keyValue.match(/[0-9]/g)) {
            numberValues.push(keyValue);
            fullDisplay.push(keyValue);
        } else {
            if (numberValues.length) {
                numberSets.push(numberValues.join(''));
                numberValues.splice(0, numberValues.length);
            }
            if (keyValue === '=') {
                displayedTotal.innerText = numberSets.reduce((equals, number, index) => {
                    // console.log(`equals index: ${index}`);
                    // console.log(`operation: ${operations[index - 1]}`);
                    // console.log(`num1: ${equals}`);
                    // console.log(`num2: ${number}`);                    
                    return operate(operations[index - 1], parseInt(equals), parseInt(number));
                });
            } else {
                operations[numberSets.length - 1] = keyValue;
                fullDisplay[fullDisplay.length-1].match(/[0-9]/g) ? fullDisplay.push(keyValue) : fullDisplay[fullDisplay.length-1] = keyValue;
            }
        }
        displayedInput.innerText = fullDisplay.join('');
        // console.log(numberValues);
        console.log(operations);
        console.log(numberSets);
    });
});