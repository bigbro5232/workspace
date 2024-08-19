// 07/31

const promise = new Promise((resolve, reject) => {
    // 서버 통신
    const ok = true;
    // const ok = false; // 
    if (ok) {
        const message = "안녕하세요";

        // const delay = Date.now() + 3000;
        // while (Date.now() < delay) {}

        resolve(message);
    } else {
        reject(new Error("문제 생겼습니다."));
    }
});

// 소비자 코드
// 비동기로 promise로부터 데이터 소비
// promise의 메서드는 항상 promise를 반환한다
promise.then((message) => {
    // console.log(message);
    return message + "A";
})
    // 기존 promise에 resolve("안녕하세요 A");
    .then((message2) => {
        // console.log(message2);
        return new Promise((resolve, reject) => {
            // 서버 비동기 통신
            const list = [
                { title: "계시판제목1", content: "내용1" },
                { title: "계시판제목2", content: "내용2" },
                { title: "계시판제목3", content: "내용3" }
            ];
            const json = JSON.stringify(list);
            const list2 = JSON.parse(json);
            resolve[list2];
        });
    })
    .then((list) => {
        console.log(list);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(() => {
        console.log("항상 실행되는 코드 영역");
    });