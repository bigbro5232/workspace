// 07/26

// 고차함수
// foreach()
const numbers = [1, 6, 3, 9, 5];
numbers.forEach(number => console.log(number));
/*
 foreach()메서든느 콜백함수를 호출하면서 3개(요소값,인덱스,this)의
 인자를 전달한다.
 기본적으로 foreach() 메서드는 원본배열을 변겨하지 않지만
 필요시 콜백함수로 변경가능
*/
numbers.forEach((number, index, array) => {
    array[index] = number * 2;
});
console.log(numbers);

// sort()
// 문자열로 정렬됨
// console.log(numbers.sort());
numbers.sort((x, y) => {
    return x - y;
});
console.log(numbers);

// 객체 배열
// 문자열을 비교하는 것이 아니므로 따로 비교해줘야 한다.

// filter()
const students = [
    { name: "Bdams", score: 90 },
    { name: "Adams", score: 60 },
    { name: "조하영", score: 70 },
    { name: "이재명", score: 80 },
];

let results = students.filter((student) => {
    // 필터링 조건
    if (student.score >= 90) {
        return true;
    }
    return false;
});

console.log(results);

// find()
results = students.find((student) => {
    // 조건
    if (student.score < 60) {
        return true;
    }
    return false;
});

console.log(results);

// map

const mappingstudent = students.map((student) => {
    return `학생이름${student.name},성적${student.score}`;
});

console.log(mappingstudent);


/*
sort()메서드를 사용할때 문자열로 변환하여 비교하기 때문에
콜백함수를 통하여 두 요소씩 비교하여 뺀값이 양수인지 음수인지에 따라
비교해야 일반적인 숫자 비교처럼 나타낼 수 있다.
문자열 타입은 유니코드로 변환하여 유니코드속 순번에따라
숫자를 비교했을때와 같이 비교해서 정렬해줄 수 있다.
*/
// students.sort((student1, student2) => {
//     return student2.name.charCodeAt(0) - student1.name.charCodeAt(0);
// });
// console.log(students);

// students.sort((score1, score2) => {
//     return score1.score - score2.score;
// });
// console.log(students);

