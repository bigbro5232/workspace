// 07/29

// console.log(Math.constructor);
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.abs(-10));
// console.log(Math.round(130.56));
// console.log(Math.max(5, 3, 56, 100));
// console.log(Math.ceil(53, 56));
// console.log(Math.floor(53, 56));

// console.log(Math.sqrt(Math.pow(10, 2) + Math.pow(10, 2)));

// // 로또번호(1~45)
// console.log(Math.random());

const randomNum = function () {
    const nums = [];
    for (; ;) {
        let num = Math.floor(Math.random() * (45 - 1) + 1);
        if (!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums;
}
console.log(randomNum());
// const nums = randomNum();
// nums.forEach(no => {
//     console.log(num);
// });
