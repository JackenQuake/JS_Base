'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

//products.forEach(function (prod) {
products.forEach(prod => {

    prod.price *= 0.85;
    //prod.price = parseInt(prod.price);

});

//console.log(products); //Выводить никуда не просили - отладочный "хвост".
