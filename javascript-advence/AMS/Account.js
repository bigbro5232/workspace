// 07/24

// 입출금 계좌
class Account {
    constructor(number, owner, password, balance) {
        this.number = number;
        this.owner = owner;
        this.password = password;
        this.balance = balance;
    }
    // 입금하기
    deposit(money) {
        return this.balance += money;
    }
    // 출금하기
    // 대출 계좌에서 잔액이 음수일시 오류코드가 아닌 대출금액으로
    withdraw(money) {
        if (this.balance >= money) {
            return this.balance -= money;
        } else {
            return console.log(`잔액이 부족합니다.`);
        }
    }
    // 잔액조회
    getBalance() {
        return console.log(`${this.owner}님의 잔액은 ${this.balance}원 입니다.`);
    }
    // 비밀번호 확인
    checkPassword() {
        if (this.password === password) {
            return console.log(`${this.owner}님 본인인증 되었습니다.`);
        } else {
            return console.log(`비밀번호가 틀렸습니다.`);
        }
    }
    // 전체 출력문
    toString() {
        return `${this.number},${this.owner},${this.password},${this.balance}`;
    }
}
 module.exports = Account;