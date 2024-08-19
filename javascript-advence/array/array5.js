// 07/25

// 배열의 주요 인스턴스 (프로토타입) 메서드

// join()
const scores = [90, 80, 70];
// const string = scores.join();
const string = scores.join("-");
console.log(string);

// Strinf.split()
let language = "javascript,html,css,java,sql";
let languages = language.split(",");
console.log(languages);

// reverse()
// console.log(scores.reverse());

// concat()
const score2 = scores.concat(60, 50, 40, [30, 20, 10]);
console.log(score2);

// slice()
console.log(scores.slice(0, 2));
console.log(scores.slice(0));
console.log(scores.slice(-1));

// splice()
console.log(scores.splice(1, 1));
console.log(scores);
// 추가
console.log(scores.splice(1, 0, 80));
console.log(scores);

// indexOf()
console.log(scores.indexOf(80));
console.log(scores.indexOf(50));

// includes()
console.log(scores.includes(80));
console.log(scores.includes(50));

// Array.of()
let array = Array.of(1);
console.log(array);
array = Array.of(1, 2, 3);
console.log(array);

// Array.from()
/*
객체나 문자열타입등을 유사배열 형식으로 변환하여 메서드를 이용할 수 있다.
기본적으로 Array.from()의 형태이지만 스프레드 연산자를 이용하여
[...array]같은 형식으로 사용할 수 있다.
*/
// 유사 배열 생성
const sum = function () {
    // console.log(arguments);
    // 유사배열로 변환
    const nums = Array.from(arguments);
    let sum = 0;
    for (const num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));

// foreach()
