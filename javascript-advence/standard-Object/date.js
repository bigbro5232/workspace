// 07/29

// 현재 시스템 날짜,시간
let now = new Date;
console.log(now);

let someDay = new Date(1000 * 60 * 60 * 24);
console.log(someDay);

// someDay = new Date("1970-01-02T00:00:00.000Z");
// console.log(someDay);

// someDay = new Date(1970, 1, 3);
// console.log(someDay);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toLocaleString());

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getTime());
console.log(now.getDay());

const myBirth = new Date();
const nowTime = myBirth.getTime();

myBirth.setFullYear(1999);
myBirth.setMonth(7 - 1);
myBirth.setDate(28);
const beforeTime = myBirth.getTime();
// 
console.log((nowTime - beforeTime) / (1000 * 60 * 60 * 24));

now = new Date();
now.setMonth(now.getMonth() + 3)
now.setDate(now.getDate() + 3)
console.log((now.toLocaleDateString()));

// static method
const start = Date.now();
for (let i = 0; i < 1000; i++) {
    console.log(i);
}
const end = Date.now();
console.log(end - start);