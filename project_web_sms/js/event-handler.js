import { studentRepository } from "./app.js";
import { Student } from "./Student.js";

class EventHandler {
    eventRegist() {
        document.querySelector("#addBtn").addEventListener("click", this.addStnEvt.bind(this));
        document.querySelector("#searchBtn").addEventListener("click", this.searchStnEvt.bind(this));
        document.querySelector("#sortSelect").addEventListener("change", this.sortStnEvt.bind(this));
        document.querySelector(".btn-warning").addEventListener("click", this.removeStnEvt.bind(this));
    }

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

    searchStnEvt() {
        const keyword = document.querySelector("input[placeholder='공백시 전체 검색']").value;
        const searchBy = document.querySelector(".form-select").value;
        const results = studentRepository.searchStn(keyword, searchBy);
        this.displayStnsEvt(results);
        this.clearFields();
    }

    sortStnEvt() {
        const sortBy = document.querySelector("#sortSelect").value;
        const sortedStudents = studentRepository.sortStn(sortBy);
        this.displayStnsEvt(sortedStudents);
    }

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

    clearFields() {
        document.querySelectorAll("input").forEach(input => input.value = "");
    }
}

export { EventHandler };
