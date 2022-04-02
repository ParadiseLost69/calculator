//Addition Function
let sum = (num1, num2) => num1 + num2;

//Subtraction
let diff = (num1, num2) => num1 - num2;

//multiply
let multiply = (num1, num2) => num1 * num2;

//divide
let divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2) {
  if (operator === "+") {
    return sum(num1, num2);
  } else if (operator === "-") {
    return diff(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

const numberBtn = function () {
  if (display.textContent == 0) {
    return [i];
  } else {
    display.textContent += `${i}`;
  }
};

//display
displayValue = [];
numberArray = [];
operator = "";

let display = document.querySelector(".display-port");
display.textContent = displayValue;

//Buttons
let addButton = document.querySelector(".add");
let subtractButton = document.querySelector(".subtract");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let equalButton = document.querySelector(".equals");

let onButton = document.querySelector(".on-button");

//onclick- BUttons 0-9
for (let i = 0; i <= 9; i++) {
  document.querySelector(`.number${i}`).textContent = i;
  document.querySelector(`.number${i}`).addEventListener("click", function () {
    displayValue += i;
    if (display.textContent == 0) {
      display.textContent = i;
    } else {
      display.textContent += i;
    }
  });
}

//operator buttons

addButton.addEventListener("click", function () {
  display.textContent += " + ";
  operator = "+";
  numberValue = parseFloat(displayValue);
  numberArray.push(numberValue);
  displayValue = [];
});

subtractButton.addEventListener("click", function () {
  display.textContent += " - ";
  operator = "-";
  numberValue = parseFloat(displayValue);
  numberArray.push(numberValue);
  displayValue = [];
});

multiplyButton.addEventListener("click", function () {
  display.textContent += " X ";
  operator = "X";
  numberValue = parseFloat(displayValue);
  numberArray.push(numberValue);
  displayValue = [];
});

divideButton.addEventListener("click", function () {
  display.textContent += " ÷ ";
  operator = "/";
  numberValue = parseFloat(displayValue);
  numberArray.push(numberValue);
  displayValue = [];
});

equalButton.addEventListener("click", function () {
  numberOne = parseFloat(displayValue);
  numberArray.push(numberOne);
  if (operator === "+") {
    result = sum(numberArray[1], numberArray[0]);
    console.log(result);
    display.textContent = result;
    numberArray.splice(0, numberArray.length);
    numberValue = result;
    numberArray.push(numberValue);
  } else if (operator == "-") {
    result = diff(numberArray[0], numberArray[1]);
    console.log(numberArray[0], numberArray[1]);
    console.log(numberArray);
    display.textContent = result;
    console.log(result);
    numberArray.splice(0, numberArray.length);
  } else if (operator == "X") {
    result = multiply(numberArray[0], numberArray[1]);
    console.log(numberArray[0], numberArray[1]);
    console.log(numberArray);
    display.textContent = result;
    console.log(result);
    numberArray.splice(0, numberArray.length);
  } else if (operator == "/") {
    result = divide(numberArray[0], numberArray[1]);
    console.log(numberArray[0], numberArray[1]);
    console.log(numberArray);
    display.textContent = result;
    console.log(result);
    numberArray.splice(0, numberArray.length);
  }
});

onButton.addEventListener("click", function () {
  displayValue = "";
  numberArray.splice(0, numberArray.length);
  display.textContent = "0";
});
//TEST TEST
/* PROBLEMS - the calculator keeps saving the previously registered number and wont input a new number. eg if I do 2+2 its fine but if I continue adding +3 it will stay +2 and THEN add +3 after a second time. */
