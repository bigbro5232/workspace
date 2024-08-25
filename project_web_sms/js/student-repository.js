// student-repository.js
// 학생 목록을 관리하는 클래스
import { Student } from "./Student.js";

class StudentRepo {
    constructor() {
        this.students = []; // 학생 목록을 저장하는 배열
        this.initStorage(); // localStorage 초기화
        this.loadStorage(); // localStorage에서 학생 목록 불러오기
    }

    // 학생을 목록에 추가하고 localStorage에 저장하는 메서드
    addStn(student) {
        this.students.push(student);
        this.saveStorage();
    }

    // 학생을 목록에서 삭제하고 localStorage에서 제거하는 메서드
    removeStn(id) {
        this.students = this.students.filter(student => student.id !== id);
        this.saveStorage();
    }

    // 이름이나 ID로 학생을 검색하는 메서드
    searchStn(keyword) {
        return this.students.filter(student => 
            student.name.includes(keyword) || student.id.toString().includes(keyword)
        );
    }

    // 학생 목록을 localStorage에 저장하는 메서드
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

    // localStorage에서 학생 목록을 불러와서 객체로 변환하는 메서드
    loadStorage() {
        const students = JSON.parse(localStorage.getItem("students")) || [];
        students.forEach(data => {
            const student = Student.fromData(data);
            this.addStn(student);
        });
    }

    // localStorage를 초기화하는 메서드
    initStorage() {
        localStorage.clear();
        this.students = [];
    }
}

export { StudentRepo };
