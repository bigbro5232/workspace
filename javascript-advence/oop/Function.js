// 07/22

function sum(x, y) {
    return x + y;
}

// Fucntion 생성자 함수
// 동적 함수 생성
// 임의로 생성된 생성자 함수를 Function 생성자 함수에 메모리에 문자열로 저장해둔다.
// 일반 객체의 최상위 객체는 Object prototype객체가 된다.
// 생성자 함수와 일반 함수는 최상위 객체는 Function prototype객체가 된다.
const sum = new Function("x", "y", "return x + y;");
const result = sum(10, 20);
console.log(result);
