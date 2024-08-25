class Student {
    constructor(id, name, kor, eng, math) {
        this.id = id;
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    getTotal() {
        return this.kor + this.eng + this.math;
    }

    getAvg() {
        return this.getTotal() / 3;
    }
}

export { Student };
