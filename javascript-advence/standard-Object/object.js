// 07/29

class Book {
    constructor(title, author, page) {
        this.title = title;
        this.author = author;
        this.page = page;
    }
    // 재정의
    toString() {
        return `${this.title},${this.author},${this.page}`;
    }
    hasOwnProperty(name) {
        return false;
    }
}

const book = new Book("JavaSCript", "홍길동", 100);
console.log(book.toString());
console.log(book.hasOwnProperty("title"));

for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(element);
    }
}

// Object static method
// entries()
const entries = Object.entries(book);
console.log(entries);

const dog1 = { name: "루니" };
const dog2 = { name: "루니" };
console.log(dog1 === dog2);
console.log(Object.entries(dog1).toString() === Object.entries(dog2).toString());

// is()
console.log(Object.is(10, 10));

// preventExtensions()
console.log(Object.isExtensible(book));
Object.preventExtensions(book);
console.log(Object.isExtensible(book));
book.score = 50;
console.log(book);

// freeze() 객체동결
const book2 = {
    title: "A",
    author: "조하영",
    page: 100
};
console.log(Object.isFrozen(book2));
Object.freeze(book2);
console.log(Object.isFrozen(book2));
book2.title = "B";
console.log(book2.title);
delete book2.title;
console.log(book2);