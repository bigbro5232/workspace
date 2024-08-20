// 07/19

// 객체 중첩하기
const student = {
    name: "조하영",
    grade: 1,
    number: 10,
    score: {
        kor: 70,
        eng: 90,
        math: 50,
        // 객체안에 객체를 중첩해서 생성,중첩된개체를 프로퍼티로 취급
        sum: function () {
            // this를 이요하여 score객체안에 프로퍼티 참조
            return this.kor + this.eng + this.math;
        },
        average: function () {
            // score객체안에 생성한 프로퍼티를 this를 이용하여 참조
            return this.sum() / 3;
        }
    },
    printInfo: function () {
        // 출력으 하기 위한 프로퍼티 생성
        console.log(`${this.grade}\t${this.number}\t${this.name}\t${this.score.sum()}\t${this.score.average()}\t`);
    }
}
student.printInfo();

// in 연산자 예제
console.log("grade" in student);
// if("printInfo" in student){
//     student.printInfo();
// }
if (student.printInfo !== undefined) {
    student.printInfo();
}

// for/in 에제
for (const key in student) {
    console.log(key);
}

// 프로퍼티를 순행할때 무조건 대괄호([])이용
for (const key in student) {
    if ((typeof student[key]) === "function"){
        continue;
    }
    console.log(key);
}