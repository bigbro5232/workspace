// let myname: string = 'Hong';
// myname = '123';
// console.log(myname);
// let name: string = 'ho';
// name = '12';

import { log } from "console";
import { escapeLeadingUnderscores } from "typescript";

let names: string[] = ['h', 's', 'd']
let age: number;
age = 22;

let height: number = 154;
console.log(names, age, height);

let isLogin: boolean = true;
let user: object = {}

interface User {
    name: string;
    age: number;
}
let user2: User = { name: 'fd', age: 26 }

interface Man {
    name: string;
    height: number;
}
interface Employee extends Man {
    dept: string;
    job: string;
}
let m1: Man = { name: 'asd', height: 123 }
let e1: Employee = { name: 'dd', height: 124, dept: 'qwer', job: 'qsda' }
console.log(m1, e1);

type Member = {
    name: string,
    age: number
}

let m2: Member = { name: 'choi', age: 23 }

type Emp = Member & {
    dept: string;
}
let e2: Emp = {
    name: '123s',
    age: 24,
    dept: 'sales'
}
console.log(e2);

type A = {
    name: string
}
type B = {
    age: number
}
type C = A | B; // interface는 교차타입은 가능하나 유니온 타입은 불가능
let person: C = { name: 'james' }
let person2: C = { age: 23 }
let person3: C = { name: 'asdf', age: 24 }
console.log(person, person2, person3);

// 타입 추론(type infernce)
// js와 호환을 위해 타입 주석을 생략할 수 있다.
// ts컴파일러는 할당된 값에 따라 변수의 타입을 지정한다 --> 타입추론
let a = 10; //number
let b = 'Hello'; //string
let c = false; //boolean
let d = { name: 'hon', age: 12 }; //object
// 값 변경
// a = 'Bye';

// let e: any = 
// e; 'hi';
// console.log(e);

// e = 'cccc'
// console.log(e);

function response(val: boolean): string | undefined {
    if (val) {
        return "Success"
    }
    return
}
console.log(response(true));
console.log(response(false));

// function check(name: string | undefined): void {
//     if (name === undefined) {
//         console.log('error');

//     }
//     else {
//         console.log((` oni: ${name}`));

//     }
// }
// check{ 'as' };
// check(f);
// check(undefined)
