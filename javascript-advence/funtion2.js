// 화살표 함수을 이용한 함수 정의
// 참조변수 sum
let sum = (x, y) => {
    return x + y;
}

// 방식2
let sum2 = (x, y) => x + y;

// 방식3
let squre = x => x * x;

// 방식4
let greeting = () => "Hello";

// 곃과
console.log(`결과 : ${sum(10, 20)}`);
console.log(`결과 : ${sum2(10, 20)}`);
console.log(`결과 : ${squre(10)}`);
console.log(`결과 : ${greeting()}`);

// 즉시 실행 함수
(function () {
    console.log("즉시 실행 함수");
})();