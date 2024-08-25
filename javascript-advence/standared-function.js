// 07/19

let inputNum = parseInt("30"); // 문자열 30을 정수 30으로 변환
console.log(typeof inputNum); // 정수인지 아닌지 타입 확인
console.log(inputNum + 20); // 30 + 20 = 50

let age = "40살";
age = parseInt(age); // 문자열에서 숫자만 추출하여 정수로 변환
console.log(age + 17); // 40 + 17 = 57

console.log(parseFloat("69.56" * 10)); // 문자열을 실수로 변환

let num = Number("500");
console.log(typeof num);

console.log(NaN === NaN); // false

// 전달된 인자숫자로 형변환 후 NaN이닞 확인할 때
// NaN을 직접 비교하지 말고 isNaN()함수를 이용
num = "조하영";
if (isNaN(num)) {
    console.log("숫자를 입력하세요.");
}

// setTimeout()함수
// 3초후 로그 출력
setTimeout(() => {
    console.log("오늘은 즐거운 금요일");
}, 3000);
// setInterval()함수
// 1초 주기로 출력
let count = 0;
let timer = setInterval(() => {
    // console.log("오늘은 즐거운 금요일");
    console.log(++count);
}, 1000);
// setInterval() 함수 종료
// clearInterval(timer);