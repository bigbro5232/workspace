import { Student } from "./Student.js";

class StudentRepo {
    constructor() {
        this.students = []; 
        this.initStorage();
        this.loadStorage();
    }

    addStn(student) {
        this.students.push(student);
        this.saveStorage();
    }

    removeStn(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.saveStorage();
    }

    searchStn(keyword, searchBy) {
        return this.students.filter(student => {
            if (searchBy === "ssn") {
                return student.id.toString().includes(keyword);
            } else if (searchBy === "name") {
                return student.name.includes(keyword);
            } else if (searchBy === "kor") {
                return student.kor.toString().includes(keyword);
            } else if (searchBy === "eng") {
                return student.eng.toString().includes(keyword);
            } else if (searchBy === "math") {
                return student.math.toString().includes(keyword);
            } else if (searchBy === "total") {
                return student.getTotal().toString().includes(keyword);
            } else if (searchBy === "avg") {
                return student.getAvg().toFixed(2).includes(keyword);
            }
        });
    }

    sortStn(sortBy) {
        let sortedStudents = [...this.students];

        if (sortBy === "ssn") {
            sortedStudents.sort((a, b) => a.id - b.id);
        } else if (sortBy === "name") {
            sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "kor") {
            sortedStudents.sort((a, b) => a.kor - b.kor);
        } else if (sortBy === "eng") {
            sortedStudents.sort((a, b) => a.eng - b.eng);
        } else if (sortBy === "math") {
            sortedStudents.sort((a, b) => a.math - b.math);
        } else if (sortBy === "total") {
            sortedStudents.sort((a, b) => a.getTotal() - b.getTotal());
        } else if (sortBy === "avg") {
            sortedStudents.sort((a, b) => a.getAvg() - b.getAvg());
        }

        return sortedStudents;
    }

    saveStorage() {
        const students = this.students.map(student => ({
            id: student.id,
            name: student.name,
            kor: student.kor,
            eng: student.eng,
            math: student.math
        }));
        localStorage.setItem("students", JSON.stringify(students));
    }

    loadStorage() {
        const students = JSON.parse(localStorage.getItem("students")) || [];
        students.forEach(data => {
            const student = new Student(data.id, data.name, data.kor, data.eng, data.math);
            this.addStn(student);
        });
    }

    initStorage() {
        localStorage.clear();
        this.students = [];
    }
}

export { StudentRepo };

