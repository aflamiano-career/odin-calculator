let num1 = "";
let num2 = "";
let operator = "";
let previousOperator = "";

let expression = "";
let output = "";
let result = "";

let hasOperator = null;
let hasFirstNum = null;
const outputScreen = document.querySelector(".screen p");

const digitBtns = document.querySelectorAll(".digit-row button");
digitBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    output += e.target.textContent;

    if (!hasFirstNum) {
      num1 = parseFloat(output);
    } else {
      num2 = parseFloat(output);
    }

    outputScreen.textContent = output;
    hasOperator = false;
  });
});

const operatorBtns = document.querySelectorAll(".operator-btn");
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.textContent.toLowerCase();

    if (num1) {
      hasFirstNum = true;
    }

    if (!hasOperator) {
      if (num2) {
        num1 = operate(previousOperator, num1, num2);
        outputScreen.textContent = num1;
      }
    }

    previousOperator = operator;
    hasOperator = true;
    output = "";
  });
});

const equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", (e) => {
  if (num2) {
    num1 = operate(previousOperator, num1, num2);
    outputScreen.textContent = num1;
    hasOperator = true;
  }
});

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num2 !== 0 ? num1 / num2 : "ERROR";
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
  }
}
