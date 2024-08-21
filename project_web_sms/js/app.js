// app.js
import { Student } from "./Student.js";
import { StudentRepository } from "./student-repository.js";
import { EventHandler } from "./event-handler.js";

let studentRepository = new StudentRepository();

// 테스트를 위한 더미데이터 입력
studentRepository.addStudent(new Student(10, '김기정', 90, 80, 60));
studentRepository.addStudent(new Student(11, '최기정', 100, 90, 90));
studentRepository.addStudent(new Student(12, '박기정', 92, 82, 80));
studentRepository.addStudent(new Student(13, '최기정', 95, 85, 88));

let eventHandler = new EventHandler();
eventHandler.eventRegist();

function updateTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // 테이블 초기화

    studentRepository.students.forEach((student, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.korean}</td>
            <td>${student.english}</td>
            <td>${student.math}</td>
            <td>${student.getTotal()}</td>
            <td>${student.getAverage().toFixed(1)}</td>
            <td>${index + 1}</td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById('addBtn').addEventListener('click', () => {
    const sno = document.querySelector('input[name="sno"]').value;
    const sname = document.querySelector('input[name="sname"]').value;
    const kor = document.querySelector('input[name="kor"]').value;
    const eng = document.querySelector('input[name="eng"]').value;
    const math = document.querySelector('input[name="math"]').value;

    if (sno && sname && kor && eng && math) {
        const student = new Student(sno, sname, parseInt(kor), parseInt(eng), parseInt(math));
        studentRepository.addStudent(student);
        updateTable();
        alert('학생이 추가되었습니다.');
    } else {
        alert('모든 필드를 입력해주세요.');
    }
});

updateTable(); // 초기 테이블 업데이트

export { studentRepository };
