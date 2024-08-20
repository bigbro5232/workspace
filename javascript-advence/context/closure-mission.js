// 07/24

function counter() {
    let count = 0;
    // 필요할떄 증가시키거나 감소시켜야함
    // callback함수로 외부로부터 증감을 선택해야한다.
    return function (fn) { // 클로저함수에 콜백
        count = fn(count)
        return count;
    }
}
const increase = function (number) {
    return ++number;
}
const decrease = function (number) {
    return --number;
}

// const increamentcounter = counter(number => ++number);
// let increamentcounter = counter(increase);
// let updateCount = increamentcounter();
// console.log(updateCount);
// console.log(increamentcounter());

// const closure = (counter())(increase);
// 1
// const closure = (counter())(decrease);
// -1

// 즉시호출함수
const closure = (function () {
    return counter();
})();

console.log(closure(increase));
console.log(closure(increase));
console.log(closure(increase));
console.log(closure(decrease));
console.log(closure(decrease));
console.log(closure(decrease));