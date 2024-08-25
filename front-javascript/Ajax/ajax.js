// callback 기반의 비동기 통신 함수
export const get = function (url, success, fail) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", (e) => {
        if (xhr.status === 200) {
            success(JSON.parse(xhr.responseText));
        } else {
            fail(xhr.status);
        }
    });
    xhr.send();
}

