// event-handler.js
import { studentRepository } from "./app.js";

class EventHandler {
    constructor() {
        this.addBtn = document.getElementById('addBtn');
        this.deleteBtn = document.querySelector('.btn-warning');
        this.searchBtn = document.querySelector('.btn-primary');
        this.sortSelect = document.getElementById('sortSelect');
    }

    // 이벤트 등록 메서드
    eventRegist() {
        this.addBtn.addEventListener('click', this.addStudent);
        this.deleteBtn.addEventListener('click', this.deleteStudent);
        this.searchBtn.addEventListener('click', this.searchStudent);
        this.sortSelect.addEventListener('change', this.sortStudents);
    }

    // 학생 추가 메서드
    addStudent() {
        const sno = document.querySelector('input[name="sno"]').value;
        const sname = document.querySelector('input[name="sname"]').value;
        const kor = document.querySelector('input[name="kor"]').value;
        const eng = document.querySelector('input[name="eng"]').value;
        const math = document.querySelector('input[name="math"]').value;

        if (sno && sname && kor && eng && math) {
            const student = new Student(sno, sname, parseInt(kor), parseInt(eng), parseInt(math));
            studentRepository.addStudent(student);
            alert('학생이 추가되었습니다.');
        } else {
            alert('모든 필드를 입력해주세요.');
        }
    }

    // 학생 삭제 메서드
    deleteStudent() {
        const sno = document.querySelector('input[name="sno"]').value;
        if (sno) {
            const students = studentRepository.students.filter(student => student.id !== parseInt(sno));
            studentRepository.students = students;
            alert('학생이 삭제되었습니다.');
        } else {
            alert('삭제할 학생의 번호를 입력해주세요.');
        }
    }

    // 학생 검색 메서드
    searchStudent() {
        const keyword = document.querySelector('input[placeholder="공백시 전체 검색"]').value;
        const results = studentRepository.searchStudents(keyword);
        console.log(results);
        // 검색 결과를 화면에 표시하는 로직 추가 가능
    }

    // 학생 정렬 메서드
    sortStudents() {
        const criteria = document.getElementById('sortSelect').value;
        const sortedStudents = studentRepository.sortStudents(criteria);
        console.log(sortedStudents);
        // 정렬된 결과를 화면에 표시하는 로직 추가 가능
    }
}

export { EventHandler };
