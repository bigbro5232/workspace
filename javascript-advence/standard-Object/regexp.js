// 07/30

const phone = "010-1234-567가";
const phone2 = "010-1234-5678";

let regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(typeof regExp);

const valid = regExp.test(phone);
console.log(valid);
console.log(regExp.test(phone2));

const targetStr = "THIS Is a pen";
regExp = /is/ig;

console.log(regExp.test(targetStr));

console.log(targetStr.match(regExp));
console.log(targetStr.replace(regExp));

console.log(phone.split(/-/));

const str = "AA BB 12 Aa Bb";
regExp = /[^0-9]+/g;
console.log(str.match(regExp));

regExp = /[\d,]+/g;
console.log(str.match(regExp));

regExp = /[\D,]+/g;
console.log(str.match(regExp));

regExp = /[\w,]+/g;
console.log(str.match(regExp));