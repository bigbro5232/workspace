import { get } from "./ajax.js";
console.log("프로그램 시작됨");

// 서버로 부터 수신한 메시지 처리
const handleResponse = function (results) {
    const message = document.querySelector("#message");
    message.textContent = results;
}

// 오류처리
const handleError = function (status) {
    console.log(`오류코드 : ${status}`);

}

// get("./message.json", handleResponse, handleError);
get("https://jsonplaceholder.typicode.com/posts", handleResponse, handleError);

console.log("프로그램 종료됨");