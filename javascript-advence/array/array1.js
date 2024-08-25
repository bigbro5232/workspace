// 07/25

// 배열 선언, 생성, 초기화
let array = new Array();
array[0] = 10;
array[1] = 20;
array[2] = 30;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
// array = new Array(10);
array = new Array(1, 3, "1", { name: "조하영", age: 25 });
console.log(array);
array = [1, 3, "1", { name: "조하영", age: 25 }];
console.log(array);

// 배열 목록 출력
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

console.log(array["0"]);

// array.length = 0;
// console.log(array);

// array[array.length] = "A";
// console.log(array);

array.push("A");
console.log(array);

let count = array.unshift("B");
console.log(count);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

