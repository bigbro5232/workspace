// 07/30

console.log("프로그램 시작됨");
const foo = function () {
    try {
        // console.log(name());
        const number = 10;
        console.log(number.substring(0, 1));
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("에러 제거");
        } else {
            throw error;
        }
    }
}

const bar = function () {
    foo();
    console.log("bar실행됨");
}
try {
    bar();
} catch (error) {
    console.log(error.message);
    console.log("전역에서 에러처리");
}
console.log("프로그램 종료됨");