'use strict';

function add(a, b) {
    return Number(a) + Number(b);
}

function sub(a, b) {
    return Number(a) - Number(b);
}

function mul(a, b) {
    return Number(a) * Number(b);
}

function div(a, b) {
    //if (Number(b) == 0) return Infinity;
    return Number(a) / Number(b); // Заметим, что здесь else не нужен ;)
}