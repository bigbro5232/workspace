// 자바스크립트가 지원하는 연산자들

// 산술 연산자(+, -, *, /, %)
let x = 50, y = 10;
let name = "조하영";
let age = 26;
let job = "학생";
let info = name + age + job;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(name + age);
console.log(info);

// 복합 대입 연산자
x = 50;
// x = x + 10;
x += 10;
console.log(x);
x = 50;
x *= 10;
console.log(x);
x = 50;
x -= 10;
console.log(x);

// 증감 연산자
x = 10;
// x = x + 1;
// x += 1;
x++;
console.log(x);
x--;
console.log(x);
x = 10;
console.log(x++);

// 비교 연산자
 x = 10, y = 5
 let z = "10";
 console.log(x == y);
 console.log(x != y);
 console.log(x > y);
 console.log(x >= y);
 console.log(x < y);
 console.log(x <= y);
 console.log(x == z); // 동등 비교
 console.log(x === z); // 일치 비교
 console.log(x != z); // 동등 비교
 console.log(x !== z); // 일치 비교

// 논리 연산자
x = true, y = false;
console.log(x && y);
console.log(x || y);
console.log(!x);

x = 15;
console.log(x >= 10 && x<= 20);

// 조건 삼항 연산자
let score = 90;
let result = score >= 60 ? "성공" : "실패";
console.log(result);

x = 5, y = 3, z = 7;
result1 = x > y ? x : y; 
let result2 = result1 > z ? result1 : z;
console.log("x,y,z에 저장된 숫자중 최대값은 " + result2 + "입니다.");

// 연산자 우선순위
console.log(1 + 2 * 3);
console.log((1 + 2) * 3);

name = "조하영";
let kor = 50, eng = 100, math = 30;
let sum = kor + eng + math;
let avg = sum / 3;
console.log(name + "학생의 성적입니다.");
console.log("총점 : " + sum + ", 평균 : " + avg);