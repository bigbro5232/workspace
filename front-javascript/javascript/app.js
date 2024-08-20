// javascript실행 진입점
import { MAX_VALUE, fruit, student, sum } from "./module.mjs";
import Student from "./Student.mjs";

console.log(MAX_VALUE);
console.log(fruit);
console.log(student);
console.log(sum(1, 2));
const student1 = new Student("홍길동");
console.log(student1);
