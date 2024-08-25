// Student.js
// 학생 정보를 저장하는 클래스
class Student {
    constructor(id, name, kor, eng, math) {
        this.id = id; // 학생 ID
        this.name = name; // 학생 이름
        this.kor = kor; // 국어 점수
        this.eng = eng; // 영어 점수
        this.math = math; // 수학 점수
    }

    // 총점을 계산하는 메서드
    getTotal() {
        return this.kor + this.eng + this.math;
    }

    // 평균 점수를 계산하는 메서드
    getAvg() {
        return this.getTotal() / 3;
    }

    // 저장된 데이터를 Student 객체로 변환하는 정적 메서드
    static fromData(data) {
        return new Student(data.id, data.name, data.kor, data.eng, data.math);
    }
}

export { Student };
