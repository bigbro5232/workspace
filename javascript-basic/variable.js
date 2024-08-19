// 자바스크리브에서 변수 선언 및 할당
// 변수 선언
let age;
console.log(age);
// 변수 값 할당
age = 26;
console.log(age);

let name = "조하영";
let xyz = null;
console.log(name);

// 필요에 따라서 변수에 저장된 값 수정
age = 27;
console.log(age);

let weight;
weight = weight + 10;
console.log(weight);

let weight2 = null;
weight2 = weight2 + 10;
console.log(weight2);

// 변수 예제
// 변수 선언과 동시에 값 할당
let aPrice = 3000; //아메리카노
let lPrice = 4200; //라떼
let mPrice = 4800; //모카

console.log(aPrice); // 아메이카노 1잔
console.log(aPrice * 2); //아메리카노 2잔
console.log(lPrice * 4 + mPrice * 2); //라떼 4잔, 모카 2잔
console.log(lPrice + mPrice); // 라떼 1잔, 모카 1잔
console.log(aPrice + lPrice * 4 + mPrice * 2); // 아메리카노 1잔, 라떼4잔, 모카 2잔
console.log(lPrice * 5); // 라떼 5잔

// let x;
// let y;
// let x, y;
// x = 10,y = 20;
let x = 10, y = 20;
console.log(x, y);

// 동적 타이핑
name = 1000 // 자동 형 변환
name = 10.56 // 자동 형 변환
name = true // 자동 형 변환
console.log(name);

// 식별자 관례
let inputMoney = 100; // 카멜 스타일(권장)
let my_name = "조하영"; //스네이크 스타일(비권장)
