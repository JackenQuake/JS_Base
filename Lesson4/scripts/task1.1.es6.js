'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    };

    make25PercentDiscount = function () {
        this.price *= 0.75;
    };
};

const TestProduct = new Product("PlayStation 7", 1000);
TestProduct.make25PercentDiscount();
console.log(TestProduct);