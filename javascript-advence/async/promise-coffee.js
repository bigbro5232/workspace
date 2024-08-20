// 07/31


const order = function (coffee) {
    return new Promise((resolve, reject) => {
        resolve(`${coffee} 주문 접수 완료`);
    })
}
const display = function (result) {
    console.log(`${result}`);
}

const promise = order("아메리카노");

promise
    .then((coffee) => { console.log(`${coffee}`); })
    .catch((error) => { console.log(error.message); });