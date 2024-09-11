/*
[1] function 키워드 함수
    function 함수면(변수1:타입, 변수2:타입2,...): 반환타입{
        내용
    }
[2] 리터러 방식 함수
    =>람다식 (화살표함수)
    const gkatnaus = function(변수:타입,...): 반환타입{

    }
    ===========
    const 함수명 = (변수:타입,...): 반환타입=>{
        내용
    }
*/


function greeting1(name: string, msg: string = 'null'): string {
    return `${msg} ${name}님 `;
}
let str2 = greeting1('Tom', 'Hello');
console.log(str2);

const greeting2 = (name: string, msg: string = 'null'): string => {
    return `${msg} ${name}님 `;
}
let str3 = greeting2('Kim', 'Bye');
console.log(str3);

const printShape = (a: string, b: number): void => {
    for (let i = 1; i <= b; i++) {
        console.log(a);
    }
}
printShape('Hello', 3);


let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
    return a + b;
}
console.log(add(3, 6));

let muti: (x: number, y: number) => number;
muti = function (x, y) {
    return x * y;
}
console.log(muti(5, 8));

let logMsg: (msg: string) => void = function (msg: string): void {
    console.log(msg);
}
logMsg("hi");
