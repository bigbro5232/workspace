// Student.js
class Student {
    constructor(id, name, korean, english, math) {
        this.id = id;
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.math = math;
    }

    getTotal() {
        return this.korean + this.english + this.math;
    }

    getAverage() {
        return this.getTotal() / 3;
    }
}

export { Student };
