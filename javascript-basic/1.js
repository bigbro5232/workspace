function solution1(num1, num2) {
    return Math.floor((num1 / num2) * 1000);
}

function solution2(num1, num2) {
    let result = (num1 / num2) * 1000;
    let integerPart = 0;

    while (result >= 1) {
        result = result - 1;
        integerPart = integerPart + 1;
    }

    return integerPart;
}
console.log(solution1(1, 16));
