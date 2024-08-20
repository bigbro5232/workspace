let x = 4;
switch (x) {
    case 10:
        console.log("10");
        break;
    case 9:
        console.log("9");
        break;
    case 8:
        console.log("8");
        break;
    case 7:
        console.log("7");
        break;
    case 6:
        console.log("6");
        break;
    default:
        console.log("일치하는 숫자가 없습니다.");
}
let input = 2;
switch (input) {
    case 1:
        console.log("java");
        break;
    case 2:
        console.log("javascript");
        break;
    case 3:
        console.log("python");
        break;
    default:
        console.log("좋아하시는 언어가 없습니다.");
}

let score = 88;
let grade = parseInt(score / 10);

switch (grade) {
    case 10:
    case 9:
        console.log("A");
        break;
    case 8:
        console.log("B");
        break;
    case 7:
        console.log("C");
        break;
    case 6:
        console.log("D");
        break;
    default:
        console.log("F");
}