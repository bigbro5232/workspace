// 고차 함수
function print(name, message, callback) {
    let chat = (`[${name}] : ${message}`);
    callback(chat);
}

// 선언향 함수
function printConsole(chat) {
    console.log("콘솔창에 메세지 출력");
    console.log(chat);
}

print("조하영", "안녕하세요...", printConsole);
print("박기정", "HELLO", function (chat) {
    console.log(`윈도우 창에 메세지 출력`);
    console.log(chat);
});
print("이기정", "HI", chat => console.log(chat));

// 예제
const calc = function (x, y, fn) {
    return fn(x, y)
}
// 변수에 값 대입
let x = 10, y = 5;
// 결과 출력
let result1 = calc(x, y, (x, y) => x + y);
let result2 = calc(x, y, (x, y) => x - y);
let result3 = calc(x, y, (x, y) => x * y);
let result4 = calc(x, y, (x, y) => x / y);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// 중첩 함수 예제
// 피타고라스 정리를 이요하여 빗변 길이 구하는 예제
function hypo(width, height) {
    let x = (width * width) + (height * height);
    return Math.sqrt(x);
}
// 변수의 값 대입
let width = 5, height = 6;
// 결과 출력
let result = hypo(width,height);
console.log(result);
