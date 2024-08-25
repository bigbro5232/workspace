// event-handler.js
// 이벤트 처리를 담당하는 클래스
import { studentRepository } from "./app.js";
import { Student } from "./Student.js";

class EventHandler {
    // 이벤트 등록 메서드
    eventRegist() {
        document.querySelector("#addBtn").addEventListener("click", this.addStnEvt.bind(this));
        document.querySelector("#searchBtn").addEventListener("click", this.searchStnEvt.bind(this));
        document.querySelector("#sortSelect").addEventListener("change", this.sortStnEvt.bind(this));
        document.querySelector(".btn-warning").addEventListener("click", this.removeStnEvt.bind(this));
    }

    // 학생을 추가하는 메서드
    addStnEvt() {
        const sno = document.querySelector("input[name='sno']").value;
        const sname = document.querySelector("input[name='sname']").value;
        const kor = document.querySelector("input[name='kor']").value;
        const eng = document.querySelector("input[name='eng']").value;
        const math = document.querySelector("input[name='math']").value;

        if (sno && sname && kor && eng && math) {
            const student = new Student(parseInt(sno), sname, parseInt(kor), parseInt(eng), parseInt(math));
            studentRepository.addStn(student);
            this.displayStnsEvt(studentRepository.students);
            alert("등록되었습니다.");
            this.clearFields();
        } else {
            alert("모든 필드를 입력해주세요.");
        }
    }

    // 학생을 검색하는 메서드
    searchStnEvt() {
        const keyword = document.querySelector("input[placeholder='공백시 전체 검색']").value;
        const searchBy = document.querySelector(".form-select").value;
        let results = [];

        if (keyword) {
            results = studentRepository.students.filter(student => {
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
        } else {
            results = studentRepository.students;
        }

        this.displayStnsEvt(results);
        this.clearFields();
    }

    // 학생 목록을 정렬하는 메서드
    sortStnEvt() {
        const sortBy = document.querySelector("#sortSelect").value;
        let sortedStudents = [...studentRepository.students];

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

        this.displayStnsEvt(sortedStudents);
    }

    // 학생을 삭제하는 메서드
    removeStnEvt() {
        const sno = document.querySelector("input[name='sno']").value;
        if (sno) {
            studentRepository.removeStn(parseInt(sno));
            this.displayStnsEvt(studentRepository.students);
            alert("삭제되었습니다.");
            this.clearFields();
        } else {
            alert("번호를 입력해주세요.");
        }
    }

    // 학생 목록을 화면에 표시하는 메서드
    displayStnsEvt(students) {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";

        students.forEach(student => {
            const row = `<tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.kor}</td>
                <td>${student.eng}</td>
                <td>${student.math}</td>
                <td>${student.getTotal()}</td>
                <td>${student.getAvg().toFixed(2)}</td>
                <td></td>
            </tr>`;
            tbody.innerHTML += row;
        });
    }

    // 모든 입력 필드를 비우는 메서드
    clearFields() {
        document.querySelectorAll("input").forEach(input => input.value = "");
    }
}

export { EventHandler };
