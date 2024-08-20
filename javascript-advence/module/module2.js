// 07/24

// 모듈 시스템은 상대경로만 이용하여 표현한다.
const object = require("./module1");
// console.log(object.title);
// console.log(object.MAX_VOLUME);
// console.log(object.sum(10, 20));
// console.log(object.user.toString());

// 구조분해 할당
const { title, MAX_VOLUME, sum, user } = require("./module1");
console.log(title);
console.log(MAX_VOLUME);
console.log(sum(10, 20));
console.log(user);