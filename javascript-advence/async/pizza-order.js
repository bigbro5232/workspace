// 07/31

// 피자 주문

// const orderPizza = function () {
//     return new Promise((resolve, reject) => {
//         resolve("피자 주문");
//     });
// }


// 도우 준비

// const setDough = function (message) {
//     console.log(message);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("피자 도우 준비");
//         }, 3000);
//     });
// }


// 토핑 준비

// const topping = function (message) {
//     console.log(message);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("토핑 준비");
//         }, 3000);
//     });
// }


// 피자 굽기

// const bakePizza = function (message) {
//     console.log(message);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("피자 굽기");
//         }, 3000);
//     });
// }



// 피자 주문

// orderPizza()
//     .then(message => setDough(message))
//     .then(message => topping(message))
//     .then(message => bakePizza(message))
//     .then(message => console.log(message));

// async function main() {
//     const message1 = await orderPizza();
//     console.log(message1);
//     const message2 = await setDough();
//     console.log(message2);
//     const message3 = await topping();
//     console.log(message3);
//     const message4 = await bakePizza();
//     console.log(message4);
// }

// main();
const orderPizza = async function () {
    return "피자 주문";
}
const setDough = async function () {
    return "피자 도우 준비";
}
const topping = async function () {
    return "토핑 준비";
}
const bakePizza = async function () {
    return "피자 굽기";
}
const main = function () {
    try {
        (async () => {
            const message = await orderPizza();
            message = await setDough(message);
            message = await topping(message);
            message = await bakePizza(message);
        })();
    } catch (error) {
        console.log(error);
    }
}