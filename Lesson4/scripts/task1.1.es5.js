'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
};

let TestProduct = new Product("PlayStation 7", 1000);
TestProduct.make25PercentDiscount();
console.log(TestProduct);