// 07/19

//  분해(spread) 연산자
const book1 = {
    title: "javascript",
    author: "조하영",
    x: function () {
        console.log("1");
    }
};

// 얇은 복사
const book2 = book1;
book2.author = "김기정";
console.log(book2.author); // 김기정
console.log(book1.author); // 김기정

// 스프레드 연산자를 이용한 깊은 복사
const book3 = { ...book1 };
book3.author = "이기정";
console.log(book3.author); // 이기정
console.log(book1.author); // 조하영

// 스프레드 연산자를 이용한 깊은 복사
const book3 = Object.assign(book1);
book3.author = "이기정";
console.log(book3.author); // 이기정
console.log(book1.author); // 조하영