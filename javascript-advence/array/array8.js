// 07/26

// 객체 배열
// 문자열을 비교하는 것이 아니므로 따로 비교해줘야 한다.

const students = [
    { name: "Bdams", score: 90 },
    { name: "Adams", score: 60 },
    { name: "조하영", score: 70 },
    { name: "이재명", score: 100 },
];

// some()
// 특정 조건을 하나라도 만족하면 true
let exists = students.some(student => student.score === 100);
console.log(exists);

// 위 식을 풀어서 표현
// const exists = students.some((student) => {
//     // if (student.score === 100) {
//     //     return true;
//     // }
//     // return false;
//     return student.score === 100;
// });

// every()
// 모든 조건을 만족하면 true
exists = students.every(student => student.score >= 60);
console.log(exists);
