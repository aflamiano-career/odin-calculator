let num1 = "";
let num2 = "";
let operator = "";
let previousOperator = "";

let expression = "";
let output = "";
let result = "";

let operatorFlag = null;

const outputScreen = document.querySelector(".screen p");

const digitBtns = document.querySelectorAll(".digit-row button");
digitBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let digitValue = e.target.textContent;
    output += digitValue;

    outputScreen.textContent = output;
    operatorFlag = false;
  });
});

const operatorBtns = document.querySelectorAll(".operator-btn");
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let operatorValue = e.target.textContent.toLowerCase();

    if (operator !== "=") {
      operator = previousOperator;
    } else {
      operator = operatorValue;
    }

    if (!operatorFlag) {
      if (!num1) {
        num1 = parseFloat(outputScreen.textContent);
      } else {
        num2 = parseFloat(outputScreen.textContent);
        num1 = operate(previousOperator, num1, num2);
        outputScreen.textContent = num1;
      }
    }

    previousOperator = operator;
    operatorFlag = true;

    output = "";
  });
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

// console.log(add(num1, num2));
// console.log(subtract(num1, num2));
// console.log(multiply(num1, num2));
// console.log(divide(num1, num2));

// console.log(operate("+", num1, num2));
// console.log(operate("-", num1, num2));
// console.log(operate("*", num1, num2));
// console.log(operate("/", num1, num2));
