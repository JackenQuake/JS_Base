'use strict';

function ParseNumber(a) {

    let _ParseNumber = {
        units: "",
        tens: "",
        hundreds: "",
    };

    let msg = "";

    if (a != parseInt(a)) msg = "invalid number [must be INTEGER]."
    else if (a < 0) msg = "invalid range [must be MORE THAN ZERO]."
    else if (a > 999) msg = "invalid range [must be LESS THAN 999].";

    if (msg != "") {
        console.log("Input error: " + msg);
        return {};
    }

    _ParseNumber.units = a % 10;
    _ParseNumber.tens = (a % 100 - _ParseNumber.units) / 10;
    _ParseNumber.hundreds = (a - _ParseNumber.tens * 10 - _ParseNumber.units) / 100;

    return _ParseNumber;
}

// let i = 5.2;
// console.log((i == parseInt(i) ? "Совпало" : "Несовпало"));

//console.log(ParseNumber(123));

console.log(ParseNumber(prompt("Please enter INTEGER number form 0 to 999:")));