// 07/22

// 팩토리 함수
// pdf파일과 다르게 함수를 생성할때 변수를 다시 받아올 필요 없이
// 나타내줄 수 있다.
const createUser = function (name, email, address) {
    return {
        name,
        email,
        address,
        buy() {
            console.log(`${this.name}님이 상품을 구매하였습니다.`);
        }
    };
}

const cho = createUser("조하영", "th0102cr@naver.com", "파주시");
cho.buy();
const lee = createUser("이재용", "th0102cr@naver.com", "파주시");
lee.buy();