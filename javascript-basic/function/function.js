function max(num1, num2, num3) {
    let max = 0;
    if (num1 > num2) max = num1;
    else max = num2;
    if (max > num2) max = num3;
    return max;
}
let result = (10, 30, 20);
console.log(result);

