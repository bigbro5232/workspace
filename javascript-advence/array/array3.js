// 07/25

// 학생 목록저장을 위한 배열
const students = [];
// 학생 등록
students.push({ name: "A", score: 90 });
students.push({ name: "B", score: 80 });
students.push({ name: "C", score: 70 });
students.push({ name: "D", score: 60 });

const printStudents = function (students) {
    // 학생 목록 출력
    console.log(`이름\t점수`);
    for (const student of students) {
        if (!student) {
            continue;
        }
        console.log(student);
    }
}
printStudents(students);

// // 복사본 배열
// printStudents(...students);

// // 학생들 성적 총점
// let sum = 0;
// for (const student of students) {
//     sum += student.score;
// }
// console.log(`총점: ${sum}`);

// const searchByName = function (name) {
//     for (const student of students) {
//         if (student.name === name) {
//             return student;
//         }
//     }
//     return undefined;
// }

// let inputName = "A";
// const searchStudent = searchByName(inputName);
// if (searchStudent) {
//     console.log(`${searchStudent.name}\t${searchStudent.score}`);
// } else {
//     console.log("해당 학생이 존재하지 않습니다.");
// }
