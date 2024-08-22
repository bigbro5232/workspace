import { get } from "./ajax-promise.js";
console.log("프로그램 시작됨");

// 서버로 부터 수신한 메시지 처리
const handleResponse = async function () {
    const getPlace = await get("https://jsonplaceholder.typicode.com/posts")
    const tbody = document.querySelector('tbody');
    getPlace.map(x => {
        const tr = document.createElement('tr');
        tr.innerHTML =
            `<th>${x.userId}</th>
             <th>${x.id}</th>
             <th>${x.title}</th>
             <th>${x.body}</th>`;
        tbody.appendChild(tr);
    });
}

handleResponse();


// 오류처리
// const handleError = function (status) {
//     console.log(`오류코드 : ${status}`);

// }
// get("./message.json", handleResponse, handleError);
// get("https://jsonplaceholder.typicode.com/posts", handleResponse, handleError);
console.log("프로그램 종료됨");