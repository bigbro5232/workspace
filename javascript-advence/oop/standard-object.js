// 07/22

// 자바스크립트 표준 내장 객체(생성자 함수)
// String,Number,Boolean,Date,Array......

let num = "12345";

const str = new String("12345");
console.log(str.length);

let num2 = 3434;
const numObj = new Number(num2);
console.log(numObj);

let input = "343434";
let result = Number(input);
console.log(typeof result);

const today = new Date();
console.log(today.toString());