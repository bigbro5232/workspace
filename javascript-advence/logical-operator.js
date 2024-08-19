console.log("java" && "javascript");

console.log(null && undefined);
console.log(0 || true);
console.log("0" && NaN);
console.log({} || 123);

function print(value) {
    let message = value || "javascript";
    console.log(message);
}
print("조하영");
print();