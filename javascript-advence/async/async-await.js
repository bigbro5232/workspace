// 07/31


// promise객체를 직접 생성하지 않아도
// 함수앞에 async를 붙여주는겄으로 promise를 반환받을 수 있다.
async function getHello() {
    return "Hello";
}

// const promise = getHello();
// promise.then((message) => {
//     console.log(message);
// });

// await 키워드는 일반함수에서 사용할 수 없고
// asnyc가 선언된 함수에서만 사용할 수 있음
async function x() {
    const message = await getHello();
    console.log(message);
}

x();