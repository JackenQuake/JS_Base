'use strict';

let str = "";

for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= i; j++) {
        str = str + "x";
    }
    console.log(str);
    str = "";
}