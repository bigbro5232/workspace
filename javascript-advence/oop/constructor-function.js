// 07/22

// 생성자 함수
// 학생 걕체를 만들기위한 생성자 함수
function Student(ssn, name, korean, english, math) {
    this.ssn = ssn;
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
    // 암묵적 this 변환
    // return this;

    // this뒤에서는 단축형 메서드 생성 불가
    this.getSum = function () {
        return this.korean + this.english + this.math;
    }
    this.getAverage = function () {
        return this.getSum() / 3;
    }
    this.toString = function () {
        return `${this.ssn}\t${this.name}\t${this.korean}\t${this.english}\t${this.math}\t${this.getSum()}\t${this.getAverage()}`;
    }
}

/*
 생성자 함수를 호출하기 위해서 new키워들르 함께 호출해야
 인스턴스를 생성할 수 있다.
 new 연산자와 함께 생성자 함수를 호출하지 않으면 일반함수로 호출된다.
*/

// 생성자 함수로 호출
const student = new Student(10, "조하영", 90, 100, 50);
// console.log(student.name);
// console.log(student.getSum());
// console.log(student.getAverage());
console.log(student.toString());

// 일반 함수로 호출
// 일반함수는 묵시적으로 return이 없으면 undefind로 반환된다
// const student2 = Student(10, "조하영", 90, 100, 50);
// console.log(student2.name);

/*
 모든 인스턴스가 공유하는 프로퍼티와 메서드를 생성자 함수 내에
 저장하고 사용할 수 있다.
 생성자 함수 도 객체이기 때문에 메모리에 할당에 할당된 후 
 공유하는 프로퍼티를 생성자 함수 인스턴스 객체가 아닌
 생성자 함수 객체로 추가 되는 것이다.
*/

// 모든 학생 객체들이 공유하는 프로퍼티
// 생성자 함수 객체에 프로퍼티 추가
Student.schoolName = "KOSTA school";
// 모든 학생 객체들이 공통적으로 사용하는 메서드
Student.sum = function (x, y) {
    return x = y;
}
console.log(Student.schoolName);
console.log(Student.sum(10, 20));