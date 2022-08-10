'use strict';

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case "+": return Number(add(arg1, arg2));
        case "-": return Number(sub(arg1, arg2));
        case "*": return Number(mul(arg1, arg2));
        case "/": return Number(div(arg1, arg2));
        default: {
            alert("Operation " + operation + " does not exist.");
            throw new Error("Operation " + operation + " does not exist.");
        }
    }

}

let a = Number(prompt("Please enter number A:"));
let b = Number(prompt("Please enter number B: "));
let op = prompt("Please enter operation between " + a + " and " + b + " :");

alert(String(a) + " " + op + " " + String(b) + ' = ' + String(mathOperation(a, b, op)));