// 매개 변수의 기본값 지정
function multi(x = 0, y = 0) {
    return x * y;
}

console.log(multi(10, 2));
console.log(multi(10));
console.log(multi());

// 기본 매개변수의 함수를 기본값으로 사용 가능
function greeting(name,greetFunc = defaultGreeting) {
    greetFunc(name);
}
// greetFunc변수에 값이 지정되지 않으면 
// defaultGreeting()함수가 기본값으로 사용됨
function defaultGreeting(name) {
    console.log(`hello.${name}`);
}
// greetFunc변수에 값이 지정되지 않아서 defaultGreeting()함수 호출
greeting("조하영");
// 지정된 변수로 값 호출
greeting("조하영",function(name){
    console.log(`Hi${name}`);
});