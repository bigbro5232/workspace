// 07/30
console.log("start");

const tranferData = function () {
    console.log("미국서버 통신 수행");
}

const generalFunction = function () {
    console.log("일반 기능 수행");
}

setTimeout(tranferData, 3000);

setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}, 0);

generalFunction();

console.log("end");