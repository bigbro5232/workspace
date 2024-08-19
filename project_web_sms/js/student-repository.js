// student-repository.js
import { Student } from "./Student.js";

class StudentRepository {
    constructor() {
        this.students = [];
    }

    // 학생 추가 메서드
    addStudent(student) {
        this.students.push(student);
    }

    // 학생 검색 메서드 (이름 또는 번호로 검색)
    searchStudents(keyword) {
        return this.students.filter(student => 
            student.name.includes(keyword) || student.id.toString().includes(keyword)
        );
    }

    // 학생 정렬 메서드 (이름 또는 번호로 정렬)
    sortStudents(criteria) {
        if (criteria === 'name') {
            return this.students.sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === 'id') {
            return this.students.sort((a, b) => a.id - b.id);
        } else {
            return this.students; // 기본 정렬 (변경 없음)
        }
    }
}

export { StudentRepository };
