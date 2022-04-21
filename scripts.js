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

// console.log(operate('/', 1, 1));
// console.log(operate('*', 1, 2));
// console.log(operate('-', 1, 2));
// console.log(operate('+', 1, 2));

const displayedMemory = document.querySelector('.js-display-memory');
const displayedTotal = document.querySelector('.js-display-total');
const displayedInput = document.querySelector('.js-display-input');

const mainKeypad = document.querySelector('.js-main-keypad');
const mainKeys = mainKeypad.querySelectorAll('button');

let inputs = [];
let display = 0;

const deleteFunction = () => {
    inputs.pop();
    if (!inputs.length) {
        display = 0;
        displayedInput.innerText = display;
    } else {
        display = inputs.join('');
        displayedInput.innerText = display;
    }
}

const clearFunction = () => {
    inputs.splice(0, inputs.length);
    display = 0;
    displayedMemory.innerText = '';
    displayedTotal.innerText = '';
    displayedInput.innerText = 0;
}

const buttonDelete = document.querySelector('.btn-delete');
buttonDelete.addEventListener('click', deleteFunction);

const buttonClear = document.querySelector('.btn-clear');
buttonClear.addEventListener('click', clearFunction);

const isNumber = (value) => {
    return value.match(/[0-9]/g);
}

mainKeys.forEach((key) => {
    key.addEventListener('click', (e) => {
        let keyValue = e.target.value;
        // console.log(keyValue);
        if (isNumber(keyValue)) {
            inputs.push(keyValue);
            display = inputs.join('');
        } else if (keyValue === '.') {
            let decimal = inputs
                                .join('')
                                .split(/[^0-9.]/g);
            if (!decimal[decimal.length-1].includes('.')) {
                inputs.push(keyValue);
                display = inputs.join('');
            }
        } else if (keyValue === '=') {
            if (!inputs.length) {
                // DO NOTHING
            } else if (isNumber(inputs[inputs.length-1])) {
                let numberSets = inputs
                                .join('')
                                .split(/[^0-9.]/g);
                let operations = inputs.filter((input) => {
                    return !isNumber(input) && input !== '.';
                });
                let result = numberSets.reduce((result, numbers, index) => {
                    return operate(operations[index - 1], parseFloat(result), parseFloat(numbers));
                });
                console.log(numberSets);
                // console.log(operations);
                console.log(result);
                if (isNaN(result)) {
                    clearFunction();
                    displayedTotal.innerText = result;
                } else {
                    displayedTotal.innerText = Math.round(result * 100) / 100;
                }
                if (parseInt(inputs.join('')) === 0) {
                    // DO NOTHING
                } else {
                    displayedMemory.innerText = inputs.join('');
                }
            } else {
                alert('Malformed expression.');
            }
        } else {
            if (inputs.length && 
                isNumber(inputs[inputs.length-1])) {
                    inputs.push(keyValue);
                    display = inputs.join('');
            }
        }
        displayedInput.innerText = display;
    });
});