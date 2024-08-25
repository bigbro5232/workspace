// 07/25

let scores = [90, 75, 60, 45, 30];
let total = 0;

let max = scores[0];
let min = scores[0];

for (let score = 1; score < scores.length; score++) {
    if (max < scores[score]) {
        max = scores[score];
    }
}
console.log(max);

for (let score = 1; score < scores.length; score++) {
    if (min > scores[score]) {
        min = scores[score];
    }
}
console.log(min);

// 조건삼항연산자
for (const score of scores) {
    if (!score) continue;

    max = max < score ? score : max;
    min = min > score ? score : min;
}
console.log(max);
console.log(min);

// for (const score of scores) {
//     if (!score) {
//         continue;
//     }
//     // console.log(score);
//     total += score;
// }
// console.log(total);
// console.log(total / scores.length);

