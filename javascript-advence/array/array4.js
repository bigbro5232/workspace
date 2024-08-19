// 07/25

// 다차원 배열
// const classes = new Array(10);
// classes[0] = new Array(20);
// classes[1] = new Array(25);

// classes[0][0] = 50;
// classes[0][1] = 60;

// classes[0][19] = 100;

// 가상의 점수 등록
// for (let i = 0; i < classes.length; i++) {
//     classes[i] = new Array(20);
// }
const classes = [
    [90, 80, 70, 60, 50],
    [90, 80, 70, 60, 50],
    [90, 80, 70, 60, 50],
    [90, 80, 70, 60, 50],
];

// 목록 출력
for (let i = 0; i < classes.length; i++) {
    let sum = 0;
    console.log(`${i + 1}반`);
    for (let j = 0; j < classes[i].length; j++) {
        process.stdout.write(classes[i][j] + ",");
        sum += classes[i][j];
    }
    console.log();
    console.log(`총점 : ${sum}`);
    console.log(`평균 : ${sum / classes[i].length}`);
}