'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    };

    edit(text) { this.text = text; };
    dateedit(date) { this.date = date; };
};

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    };

    makeTextHighlighted() {
        this.highlighted = true;
    };
};

// let test = new AttachedPost("I. Asimov", "Foundation", new Date('May,1942'));
// console.log(test);
// test.makeTextHighlighted();
// test.edit("Foundation series");
// console.log(test);
// test.dateedit(new Date('January, 1950'));
// console.log(test);