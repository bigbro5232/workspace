// callback 기반의 비동기 통신 함수
export const get = function (url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url)
        xhr.send();
        xhr.addEventListener("load", (e) => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(xhr.status);
            }
        })
    })
}

