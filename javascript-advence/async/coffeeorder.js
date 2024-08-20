// 07/30
console.log("start");

// 커피 주문 
const order = function (coffee, fn) {
    console.log(`${coffee} 주문 접수 완료`);
    // 3sec delay
    setTimeout(() => {
        fn(coffee);
    }, 3000);
}

const display = function (result) {
    console.log(`${result}`);
}

order("아메리카노", display);

console.log("end");