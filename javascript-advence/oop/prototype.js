// 07/22

// Account 시작됨
// 생성자 함수 
const Account = function (number, owner, password, balace) {
    this.number = number;
    this.owner = owner;
    this.password = password;
    this.balace = balace;
}
// 입금하기
/*
기존에 this로 생성자를 만들어서 객체의 메서드를 생성하는것과 다르게
prototype객체를 이용하여 부모객체를 만들어서 생성자 함수를 통한
모든 인스턴스를 부모객체로부터 상속하고자하는 메서드와 프로퍼티를 
정의한다.
*/
Account.prototype.deposit = function (money) {
    return this.balace += money;
}
// 출금하기
// 출금 금액보다 잔액이 적으면 오류코드 발생
Account.prototype.withdraw = function (money) {
    if (this.balace >= money) {
        return this.balace -= money;
    } else {
        return console.log(`잔액이 부족합니다.`);
    }
}
// 잔액 조회
Account.prototype.getBalance = function () {
    return console.log(`${this.owner}님의 잔액은 ${this.balace}원 입니다.`);
}
// 비밀번호 확인
// 비밀번호 비일치시 오류코드 발생
Account.prototype.checkPassword = function (password) {
    if (this.password === password) {
        return console.log(`${this.owner}님 본인인증 되었습니다.`);
    } else {
        return console.log(`비밀번호가 틀렸습니다.`);
    }
}

Account.prototype.xyz = function () {
    console.log("xyz");
}

/*
기본적으로 일반객체의 최상위 객체인 Object Prototype객체의
사용할 수 있는 프로퍼티와 메서드들이 정의되어 있지만, 일반함수 및
생성자 함수는 최상위 객체가 Function Prototype이기 떄문에 Object Prototype
에서 정의된 인스턴스를 참조하지 않는다. 
*/ 
const account = new Account("1234-5678", "조하영", 1234, 500000);
const restMoney = account.deposit(100000);
console.log(restMoney);
console.log(account.getBalance());

const account2 = new Account("1234-5555", "이재명", 1234, 600000);
console.log(account2.getBalance());
account2.xyz();
// Object의 prototype객체가 제공하는 기능을 재사용
// const exist = account.hasOwnProperty("password");
// console.log(exist);

// Prototype Chain
let student = new Student(10, "조하영", 90, 90, 90);

// Object prototype 객체의 메소드 재사용
let exist = student.hasOwnProperty("name");
console.log(exist);
exist = student.hasOwnProperty("getSum");
console.log(exist);
exist = student.hasOwnProperty("valueOf");
console.log(exist);
// hasownProperty와 in연산자와 기능이 유사함
console.log("name" in student);
console.log("getSum" in student);
console.log("valueOf" in student);


// const xxxx = {

// };
// xxxx,hasOwnProperty();

