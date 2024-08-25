// Student.js
// 학생 정보를 저장하는 클래스
class Student {
    constructor(id, name, kor, eng, math) {
        this.id = id;
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    // 총점을 계산하는 메서드
    getTotal() {
        return this.kor + this.eng + this.math;
    }

    // 평균 점수를 계산하는 메서드
    getAvg() {
        return this.getTotal() / 3;
    }
}

export { Student };
