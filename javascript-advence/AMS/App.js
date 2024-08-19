// 응용프로그램의 시작지점 역할 파일

const Account = require("./Account");
const account = new Account("1234-5678", "조하영", 1234, 10000);
console.log(account.toString());

// const MinusAccount = require("./MinusAccount");
// const minusAccount = new MinusAccount("1234-5678", "조하영", 1234, 10000, 0);
// console.log(minusAccount.toString());

// 노드 표준 내장 모듈
const os = require("os");
console.log(os.arch());
console.log(os.homedir());