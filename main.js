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
