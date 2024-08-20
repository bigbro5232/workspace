let x = 18;
if (x >= 10 && x <= 20) {
    console.log("x의 값은 10과 20사이 입니다.");
}
// 조건식에 true나 false가 오지 않아도 실행 가능
let score = 88;
if (score > 60) {
    console.log("합격");
} else {
    console.log("탈락");
}
// 다중 if문
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}