let num1 = null;
let num2 = null;
let operator = "";
let previousOperator = "";

let output = "";

let hasOperator = null;
let hasFirstNum = null;
let hasComputed = null;
const outputScreen = document.querySelector(".screen p");

const digitBtns = document.querySelectorAll(".digit");
digitBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (output.startsWith("0")) {
      output = output.slice(1);
    }

    if (output.startsWith("-")) {
      if (output.length > 1) {
        if (output[1] == 0) {
          output = output.replace(/0+/, "");
        }
      }
    }

    if (e.target.textContent == "." && output.includes(".")) {
      return;
    }

    if (e.target.textContent == "+/-") {
      if (hasOperator) {
        output = "-0";
        outputScreen.textContent = output;
      } else {
        if (outputScreen.textContent.includes("-")) {
          output = outputScreen.textContent.slice(1);
        } else {
          output = `-${outputScreen.textContent}`;
        }
      }
    } else {
      output += e.target.textContent;
    }

    if (!hasFirstNum) {
      num1 = parseFloat(output);
    } else {
      num2 = parseFloat(output);
    }

    outputScreen.textContent = output;

    if (!hasComputed) {
      hasOperator = false;
    }
  });
});

const operatorBtns = document.querySelectorAll(".operator-btn");
operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.textContent.toLowerCase();

    if (num1 != null) {
      hasFirstNum = true;
    }

    if (hasComputed) {
      num2 = parseFloat(outputScreen.textContent);
    }

    if (!hasOperator) {
      if (num2 != null) {
        num1 = operate(previousOperator, num1, num2);
        outputScreen.textContent = num1;
      }
    }

    previousOperator = operator;
    hasOperator = true;
    hasComputed = false;

    output = "";
  });
});

const equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", () => {
  if (num2 != null) {
    num1 = operate(previousOperator, num1, num2);
    outputScreen.textContent = num1;
    output = "";
    hasFirstNum = false;
    hasOperator = true;
    hasComputed = true;
  }
});

const resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
  outputScreen.textContent = 0;
  num1 = null;
  num2 = null;
  operator = "";
  previousOperator = "";

  output = "";

  hasOperator = null;
  hasFirstNum = null;
  hasComputed = null;
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
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
