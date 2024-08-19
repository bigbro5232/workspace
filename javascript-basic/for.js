for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);
//예제1
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}
//예제2
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write("*");
    }
    console.log();
}
//예제3
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
        process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
        process.stdout.write("*");
    }
    console.log();
}
// //에제4
for (let i = 0; i < 4; i++) {
    let num = "";
    for (let j = 0; j <= i; j++) {
        num += i * (i + 1) / 2 + j;
    }
    console.log(num);
}
//에제5
for (let i = 1; i <= 9; i++) {
    let num = "";
    for (let j = 2; j <= 9; j++) {
        num += j + " * " + i + " = " + (i * j) + "\t";
    }
    console.log(num);
}
