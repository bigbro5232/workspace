// console.log("javascript");
// console.log("javascript");
// console.log("javascript");
// console.log("javascript");
// console.log("javascript");
let index = 0;
while (index < 5) {
    console.log("javascript");
    index++;
}

index = 1;
while (index <= 5) {
    console.log(index);
    index++;
}
//
index = 1;
let sum = 0;
while (index <= 100) {
    sum += index;
    index++;
}
index = 1;
let sum2 = 0;
while (index <= 100) {
    if (index % 2 <= 1) {
        sum2 += index;
    }
    index++
}
index = 1;
let sum3 = 0;
while (index <= 100) {
    if (index % 2 <= 0) {
        sum3 += index;
    }
    index++
}
//
index = 1;
sum = 0;
sum2 = 0;
sum3 = 0;
while (index <= 100) {
    if ((index % 2) === 0) {
        sum3 += index;
    } else {
        sum2 += index;
    }
    index++
}
console.log("짝수 합 : " + sum3);
console.log("홀수 합 : " + sum2);
console.log("총 합 : " + (sum2 + sum3));

let starts = 5;
while (starts > 0) {
    process.stdout.write("*");
    starts--;
}
starts = 5;
do {
    process.stdout.write("*");
    starts--;
} while (starts > 0);