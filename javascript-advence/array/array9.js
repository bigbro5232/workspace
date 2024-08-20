// 07/26

// 객체 배열
// 문자열을 비교하는 것이 아니므로 따로 비교해줘야 한다.

const students = [
    { name: "Bdams", score: 90 },
    { name: "Adams", score: 60 },
    { name: "조하영", score: 70 },
    { name: "이재명", score: 100 },
];

// reduce()
let results = students.reduce((acumulator, student) => {
    return acumulator + student.score;
}, 0);
console.log(results);

// 최대값 구하기
lresults = students.reduce((acumulator, student) => {
    if (acumulator > student.score) {
        return acumulator;
    }
    return student.score;
}, 0);
console.log(results);

// // 최소값 구하기
results = students.reduce((acumulator, student) => {
    if (acumulator < student.score) {
        return acumulator;
    }
    return student.score;
}, students[0].score);
console.log(results);


// foreach()를 이용한 예제
let total = 0;
students.forEach((student) => {
    total += student.score;
});

console.log(total);