// 07/19

// 프로퍼티가 없는 객체
const empty = {};

console.log(empty);
console.log(typeof empty);

// 2개의 프로퍼티를 가지고 있는 객체
const point = {
    x: 10, y: 20, ["x-y"]: 0
};

// 프로퍼티에 접근하기 위해 (.)을이용하여 객체에 참조하여 표기할 수 있다.
// 대괄호([])를 이용하여 표기할때는 프로퍼티명에 특수기호가 포함됬을 경우
// 사용하며, 대괄호 안에 ("")를 붙여야 한다.
console.log(point); //프로퍼티 전체
console.log(point.x); // 점(.)을 아용하여 표기
console.log(point.y);
console.log(point["x"]); // 대괄호([])를 이용하여 표기
console.log(point["y"]);
console.log(point["x-y"]);

// 프로퍼티와 메서드로 구성된 객체
// 회원정보 예제
const user = {
    name: "조하영",
    email: "th0102cr@naver.com",
    address: "대한민국 파주",
    buy: function (item) {
        // this는 자신이 실행되고 있는 프로퍼티에 접근해야할 때 이용
        console.log(`${this.name}님 ${item.name}를 구매하였습니다.`);
    }
};

// 상품 객체
const item = {
    name: "노트북",
    price: 1000000,
};

console.log(user);
console.log(user.name);
user.buy(item);

// 동적 프로퍼티 추가
user.id = "new";
user.order = function (item) {
    console.log(`${item.name}(${item.price})을 주문하였습니다.`);
};

console.log(user);

// 변수를 지정해여 값을 지정하던 것 처럼
// 프로퍼티도 메서드를 내부에서 지정하여 선언할 수 있다.
user.order({
    name: "PC",
    price: "1000000"
});

// delete를 이용하여 프로퍼티 삭제 가능
if (delete user.id) {
    console.log("id 삭제");
} else {
    console.log("id 삭제 실패");
}
