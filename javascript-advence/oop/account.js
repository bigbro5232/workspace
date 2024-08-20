// 07/19
// 07/22

// 은행 입출금 계좌를 표현한 예제
const account = {
    number: "123545-6789", // 계좌번호
    owner: "조하영", // 고객명
    password: 1234, // 비밀번호
    balace: 500000, // 잔액
    // 입금하기
    deposit: function (money) {
        return this.balace += money;
    },
    // 출금하기
    // 출금 금액이 잔액보다 많을시 오류코드 발생
    withdraw: function (money) {
        if (this.balace >= money) {
            return this.balace -= money;
        } else {
            console.log(`잔액이 부족합니다.`);
        }
    },
    // 잔액 조회
    getBalance: function () {
        console.log(`${this.owner}님의 잔액은 ${this.balace}원 입니다.`);
    },
    // 비밀번호 확인
    // 비밀번호 비일치시 오류코드 발생
    checkPassword: function (password) {
        if (this.password === password) {
            console.log(`${this.owner}님 본인인증 되었습니다.`);
        } else {
            console.log(`비밀번호가 틀렸습니다.`);
        }
        return this.password;
    }
}

// 출력문
// 비밀번호 확인후 입출금 과정 예시
account.checkPassword(123); // 비밀번호 확인(틀림)
account.checkPassword(1234); // 비밀번호 확인
account.deposit(100000); // 10만원 입금
account.getBalance(); // 10만원 입금 후 60만원인 된 잔액 조회
account.withdraw(150000); //15만원 출금
account.getBalance(); // 15만원 출금 후 60만원인 된 잔액 조회
account.withdraw(10000000); // 출금 금액이 잔액보다 높을때

// call by value 테스트
// 얕은 복사(공유)
const account2 = account;
account2.owner = "박기정";
console.log(account2);