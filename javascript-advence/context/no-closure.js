// 07/24

// 전역 변수
// let count = 0;

function increamentCount() {
    // 지역 변수를 사용하여 은닉화
    /*
    지역 변수를 단순하게 사용하면 함수내의 변수의 값이 다시 초기화가
    되어 원하는 값을 얻어내지 못함
    */
    let count = 0;

    // 클로저
    /*
    지역 변수를 외부의 함수로부터 상태를 유지하면서 접근하기 위해서
    내부 함수를 크로저를 통해서 리턴
    전역 생성 컨텍스트와 increamentCount함수 생성 컨텍스트를 연결해서
    함수 실행 종료시 값이 반환되었을 때, 소멸되지 않고 유지시킬 수 있다
    */
    return function () {
        return ++count;
    }
}

let counter = increamentCount();
let updateCount = counter();
console.log(updateCount);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// 전역변수 사용의 의한 side effect
// count = 1000;
// console.log(increamentCount());