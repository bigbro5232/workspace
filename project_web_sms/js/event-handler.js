// event-handler.js
import { studentRepository, updateTable } from "./app.js";
import { Student } from "./Student.js";

class EventHandler {
    constructor() {
        this.addBtn = document.querySelector('#addBtn');
        this.deleteBtn = document.querySelector('.btn-warning');
        this.searchBtn = document.querySelector('.btn-primary');
        this.sortSelect = document.querySelector('#sortSelect');
    }

    eventRegist() {
        this.addBtn.addEventListener('click', this.addStudent.bind(this));
        this.deleteBtn.addEventListener('click', this.deleteStudent.bind(this));
        this.searchBtn.addEventListener('click', this.searchStudent.bind(this));
        this.sortSelect.addEventListener('change', this.sortStudents.bind(this));
    }

    addStudent() {
        const sno = document.querySelector('input[name="sno"]').value;
        const sname = document.querySelector('input[name="sname"]').value;
        const kor = document.querySelector('input[name="kor"]').value;
        const eng = document.querySelector('input[name="eng"]').value;
        const math = document.querySelector('input[name="math"]').value;

        if (sno && sname && kor && eng && math) {
            const student = new Student(parseInt(sno), sname, parseInt(kor), parseInt(eng), parseInt(math));
            studentRepository.addStudent(student);
            updateTable(); // 테이블 업데이트
            alert('학생이 추가되었습니다.');
        } else {
            alert('모든 필드를 입력해주세요.');
        }
    }

    deleteStudent() {
        const sno = document.querySelector('input[name="sno"]').value;
        if (sno) {
            const students = studentRepository.students.filter(student => student.id !== parseInt(sno));
            studentRepository.students = students;
            updateTable(); // 테이블 업데이트
            alert('학생이 삭제되었습니다.');
        } else {
            alert('삭제할 학생의 번호를 입력해주세요.');
        }
    }

    searchStudent() {
        const keyword = document.querySelector('input[placeholder="공백시 전체 검색"]').value;
        const results = studentRepository.searchStudents(keyword);
        console.log(results);
        // 검색 결과를 화면에 표시하는 로직 추가 가능
    }

    sortStudents() {
        const criteria = document.querySelector('#sortSelect').value;
        const sortedStudents = studentRepository.sortStudents(criteria);
        console.log(sortedStudents);
        // 정렬된 결과를 화면에 표시하는 로직 추가 가능
    }
}

export { EventHandler };
