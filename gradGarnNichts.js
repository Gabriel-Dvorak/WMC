const prompt = require("prompt-sync")({ sigint: true });

// E4
function calculate(num1, num2, operation) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        if (operation == "+") {
            return num1 + num2;
        } else if (operation == "-") {
            return num1 - num2;
        } else if (operation == "*") {
            return num1 * num2;
        } else if (operation == "/") {
            return num1 / num2;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

// E6 🤩: loops until valid number is entered
function getNumberFromUser() {
    const raw = prompt("Please enter a number ");
    if (typeof raw === "string") {
        if (raw === "exit") {
            return false;
        }
        let Num = Number(raw);
        if (Number.isNaN(Num)) {
            return getNumberFromUser();
        } else {
            return Number(Num);
        }
    } else {
        return getNumberFromUser();
    }
}

function getOperatorFromUser() {
    const operator = prompt("Bitte Operator (+, -, *, /) eingeben oder 'exit': ");
    if (operator.toLowerCase() === "exit") return false;

    if (["+", "-", "*", "/"].includes(operator)) {
        return operator;
    } else {
        console.log("Ungültiger Operator!");
        return getOperatorFromUser();
    }
}

// E7 🤯: simple calculator loop
function runCalculator() {
    //console.log("Type 'exit' quit.");
    // TODO: loop until user types 'exit'
    const a = getNumberFromUser();
    if (a === false) {
        console.log("Beende Calculator");
        return "Beende Calculator";
    }
    const b = getNumberFromUser();
    if (b === false) {
        console.log("Beende Calculator");
        return "Beende Calculator";
    }
    const op = getOperatorFromUser();
    if (op === false) {
        console.log("Beende Calculator");
        return "Beende Calculator";
    }
    if (typeof op === "string" && typeof a === "number" && typeof b === "number") {
        if (op === "+" || op === "-" || op === "*" || op === "/") {
            let result = calculate(Number(a), Number(b), String(op));
            console.log(`Your result is: ${result}`);
            return result;
        } else {
            return "Something went wrong!";
        }
    } else {
        return "Something went wrong!"
    }
}

// ---- Example run ----
// Uncomment to try the calculator:
runCalculator();