// 07/22
// 07/23

// 은행계좌 생성자 함수
const Account = function (number, owner, password, balace) {
    this.number = number;
    this.owner = owner;
    this.password = password;
    this.balace = balace;

    // 입금하기
    this.deposit = function (money) {
        return this.balace += money;
    }
    // 출금하기
    // 출금 금액보다 잔액이 적으면 오류코드 발생
    this.withdraw = function (money) {
        if (this.balace >= money) {
            return this.balace -= money;
        } else {
            return console.log(`잔액이 부족합니다.`);
        }
    }
    // 잔액 조회
    this.getBalance = function () {
        return console.log(`${this.owner}님의 잔액은 ${this.balace}원 입니다.`);
    }
    // 비밀번호 확인
    // 비밀번호 비일치시 오류코드 발생
    this.checkPassword = function (password) {
        if (this.password === password) {
            return console.log(`${this.owner}님 본인인증 되었습니다.`);
        } else {
            return console.log(`비밀번호가 틀렸습니다.`);
        }
    }
}
// 생성자 함수 호출
const account = new Account("1234-5678", "조하영", 1234, 500000);
const account2 = new Account("1111-2222", "이재명", 123, 250000);

// 조하영 계정
account.checkPassword(123); // 비밀번호 확인(틀림)
account.checkPassword(1234); // 비밀번호 확인
account.deposit(100000); // 10만원 입금
account.getBalance(); // 10만원 입금 후 60만원인 된 잔액 조회
account.withdraw(150000); //15만원 출금
account.getBalance(); // 15만원 출금 후 60만원인 된 잔액 조회
account.withdraw(10000000); // 출금 금액이 잔액보다 높을때
// 이재명 계정
account2.checkPassword(123); // 비밀번호 확인
account2.checkPassword(1234); // 비밀번호 확인(틀림)
account2.deposit(100000); // 10만원 입금
account2.getBalance(); // 10만원 입금 후 60만원인 된 잔액 조회
account2.withdraw(150000); //15만원 출금
account2.getBalance(); // 15만원 출금 후 60만원인 된 잔액 조회
account2.withdraw(10000000); // 출금 금액이 잔액보다 높을때

// 07/23

console.log(account.constructor);
if (account.constructor === Account) {
    console.log("Account로부터 실행된 인스턴스");
}

const teacher = new Object(); // {}와같은 빈 객체이다/
teacher.name = "조하영";
teacher.age = "26";
teacher.doTeaching = function () {
    console.log("강의합니다");
}
teacher.doTeaching();