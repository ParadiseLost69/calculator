//Addition Function
let sum = (num1,num2) => num1+num2;

//Subtraction
let diff = (num1,num2) => num1-num2;

//multiply
let multiply = (num1,num2) => num1 * num2;

//divide
let divide = (num1,num2) => num1/num2;

function operate (operator, num1, num2) {
    if (operator === "+" ) {
        return sum(num1, num2)
        
    } else if (operator === "-") {
        return diff(num1,num2)
    } else if (operator === "*") {
        return multiply(num1,num2) 
    } else if (operator === "/") {
        return divide(num1,num2)
    }

}

//display
displayValue = 0

let display = document.querySelector(".display-port");
display.textContent= displayValue

//Buttons
let button0 = document.querySelector(".number-zero");
let button1 = document.querySelector(".number-one");
let button2 = document.querySelector(".number-two");
let button3 = document.querySelector(".number-three");
let button4 = document.querySelector(".number-four");
let button5 = document.querySelector(".number-five");
let button6 = document.querySelector(".number-six");
let button7 = document.querySelector(".number-seven");
let button8 = document.querySelector(".number-eight");
let button9 = document.querySelector(".number-nine");
 
let addButton = document.querySelector (".add")
let subtractButton = document.querySelector (".subtract")
let multiplyButton = document.querySelector (".multiply")
let divideButton = document.querySelector (".divide")
 
let onButton = document.querySelector (".on-button")



//onclicks
button0.addEventListener("click", function () {
    if (display.textContent == 0) {
        return 0
    }else
    display.textContent += "0"
}
)

button1.addEventListener("click", function () {
    if (display.textContent == 0) {
        display.textContent = 1;
    }else 
    display.textContent += "1"
}
 )
