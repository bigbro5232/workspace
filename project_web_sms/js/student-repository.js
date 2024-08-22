// student-repository.js
class StudentRepository {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    searchStudents(keyword) {
        return this.students.filter(student => 
            student.name.includes(keyword) || student.id.toString().includes(keyword)
        );
    }

    sortStudents(criteria) {
        if (criteria === 'name') {
            return this.students.sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === 'id') {
            return this.students.sort((a, b) => a.id - b.id);
        } else {
            return this.students;
        }
    }
}

export { StudentRepository };
