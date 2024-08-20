// 07/29

const message = "JavaScript";
// AutoBoxing을 이용하여 변수를 바로 걕체로 바꿔서 쓸 수 있다.
const messageObj = new String(message);
console.log(messageObj.length);

console.log(messageObj.substring(0, 4));
console.log(messageObj.slice(0, 4));

// AutoBoxing
console.log(message.substring(0, 4));

const ssn = "000101-1234567";
// const index = ssn.indexOf("-");
// const char = ssn.charAt(index + 1);
switch (ssn.charAt(ssn.indexOf("-") + 1)) {
    case "1": console.log("2000년 출생 이전의 남자"); break
    case "2": console.log("2000년 출생 이전의 여자"); break
    case "3": console.log("2000년 출생 이후의 남자"); break
    case "4": console.log("2000년 출생 이후의 여자"); break
    default: console.log("외국인");
}

console.log(message.includes("Script"));
console.log(message.includes("script"));
console.log(message.toUpperCase().includes("SCRIPT"));

console.log(typeof messageObj.valueOf());

// trim() 공백제거
const text = "      조하영         ";
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());