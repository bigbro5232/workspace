// 07/31

// requre() 없이 바로 사용할 수 있다.
console.log(global);

global.console.log("로그기록");
// global은 생략 가능
// global.setTimeout();
// global.module.exports
// const s = global.require('');
// console.log(window);
console.log(globalThis); //브라우저랑 node 둘다 사용가능한 전역객체
console.clear();
console.error("error");

const user = {
    name: "A",
    age: 30
};
console.log(user);
console.dir(user);

const array = [
    { a: "b", c: "d" },
    { a: "b", c: "d" },
    { a: "b", c: "d" },
    { a: "b", c: "d" },
];
console.table(array);

setImmediate(() => {
    console.log("비동기 출력");
});
// console.log(__dirname);
