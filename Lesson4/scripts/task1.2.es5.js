'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
};

Post.prototype.edit = function (text) {
    this.text = text;
};

Post.prototype.dateedit = function (date) {
    this.date = date;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
};

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

// let test = new AttachedPost("I. Asimov", "Foundation", new Date('May,1942'));
// console.log(test);
// test.makeTextHighlighted();
// test.edit("Foundation series");
// console.log(test);
// test.dateedit(new Date('January, 1950'));
// console.log(test);