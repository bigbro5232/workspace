// 07/30
console.log("프로그램 시작됨");

try {
    // console.log("name()); //StntaxError
    console.log(name()); // ReferenceError
    const number = 10;
    console.log(number.substring(0, 1)); //typeError
} catch (error) {
    // console.log(error);
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
    if (error instanceof ReferenceError) {
        console.log("ReferneceError 처리 완료");
    } else if (error instanceof TypeError) {
        console.log("TypeError 처리 완료");
    } else {
        console.log("범용 에러 처리 완료");
    }
} finally {
    console.log("항상 실행");
}

console.log("프로그램 종료됨");