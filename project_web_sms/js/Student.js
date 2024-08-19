// Student.js
class Student {
    constructor(id, name, korean, english, math) {
        this.id = id;
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
    }

    // 총점 계산 메서드
    getTotal() {
        return this.korean + this.english + this.math;
    }

    // 평균 계산 메서드
    getAverage() {
        return this.getTotal() / 3;
    }
}

export { Student };
