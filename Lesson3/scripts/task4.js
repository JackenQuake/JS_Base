'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

/*

//let photo_prods = products.filter(function (prod) {
let photo_prods = products.filter(prod => {

    return (("photos" in prod) && (prod.photos.length > 0));

});

console.log(photo_prods);

*/


let photo_prods = products.filter(prod => ("photos" in prod) && (prod.photos.length > 0)); //Изящнее!
console.log(photo_prods);

//console.log(products.filter(prod => ("photos" in prod) && (prod.photos.length > 0))); //Совсем красиво, но в этом случае - отфильтрованный массив не сохранится.

/*

//let sort_prods = products.sort(function (a, b) {
let sort_prods = products.sort((a, b) => {

    // if (a.price < b.price) return -1;
    // if (a.price == b.price) return 0;
    // if (a.price > b.price) return 1;

    return (a.price - b.price);

});

//console.log(products);
console.log(sort_prods);

*/

console.log(products.sort((a, b) => a.price - b.price)); //Совсем красиво!