const prompt = require("prompt-sync")();
//E7 🤯. Combine the calculate and getNumberFromUser functions to create a simple calculator.

//The calculator should prompt the user to enter two numbers and an operation.
//The calculator should then calculate the result and log it to the console.
//The calculator should keep running until the user enters exit.
//Test 1 Run the calculator and test the functionality.

function getNumberFromUser() {
    let x = prompt("Please enter a number:");
    if (typeof x === "string") {
        if (x === "exit") {
            return false;
        }
        let y = Number(x);
        if (Number.isNaN(y)) {
            return getNumberFromUser();
        } else {
            return Number(y);
        }
    } else {
        return getNumberFromUser();
    }
}

function getOperatorFromUser() {
    let x = prompt("Please enter a operator:");
    if (typeof x === "string") {
        if (x === "exit") {
            return false;
        } else if (x === "add" || x === "subtract" || x === "multiply" || x === "divide") {
            let y = String(x);
            return y;
        } else {
            return getOperatorFromUser();
        }
    } else {
        return getNumberFromUser();
    }
}

function calculate(num1, num2, operation) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        if (operation === "add") {
            return num1 + num2;
        } else if (operation === "subtract") {
            return num1 - num2;
        } else if (operation === "multiply") {
            return num1 * num2;
        } else if (operation === "divide") {
            return num1 / num2;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

function calculator() {
    a = getNumberFromUser();
    if (a === false) {
        return "Beende Calculator";
    }
    b = getNumberFromUser();
    if (b === false) {
        return "Beende Calculator";
    }
    op = getOperatorFromUser();
    if (op === false) {
        return "Beende Calculator";
    }
    if (typeof op === "string" && typeof a === "number" && typeof b === "number") {
        if (op === "add" || op === "subtract" || op === "multiply" || op === "divide") {
            let result = calculate(Number(a), Number(b), String(op));
            return result;
        } else {
            return "Something went wrong!";
        }
    }
}

console.log(calculator());