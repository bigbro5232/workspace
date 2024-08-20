// 07/22

const member = {
    name: "조하영",
    age: 26,
    speak: function () {
        console.log(this.name);
    },
};

console.log(member.name);
// 객체 구조분해 할당
const { name, age, speak } = member;
console.log(name);
// 구조분해 할당 시 객체안의 메서드를 함수로 가지고 나왔기 때문에
// 메서드는 자기자신의 객체를 참조하는것이 아닌 브라우저를 나타내는
// Global 이라는 전역(호스트)객체를 가리키게 된다.
speak();
member.speak;

// global객체 확인 예시
// global의 프로퍼티를 확인 가능
function hello() {
    console.log(this);
}
hello();
console.log(this);

console.clear();
// 배열
const array = ["월", "화", "수"];
console.log(array[1]);

// 배열 구조분해 할당
const [mon, tue, wed] = array;
console.log(mon);

let x = 10, y = 20;
// let temp = 0;
// x = y;
// y = temp;
// console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// 중첩 객체 구조 분해 할당
const student = {
    namen: "조하영",
    score: {
        kor: 85,
        eng: 70
    },
    freinds: ["박찬호", "이재용"]
};

console.log(student.score.kor);
console.log(student.freinds[0]);

const { namen, score: { kor, eng }, freinds: [f1, f2] } = student;
console.log(namen, kor, f1);