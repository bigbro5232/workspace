// 07/23

function doTask() {
    // console.log(this);

    // globalThis 또는 global은 전역객체이므로 생략가능
    // globalThis.console.log("출력"); 

    console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

const person = {
    name: "조하영",
    age: 10,
    doTeach: function () {
        console.log("강의합니다");
    }
}

// node.js에서 this는 global의 객체인 전역객체이다.
// doTask();

// person 객체 외부에서 선언된 메서드를 직접적으로 호출하지않고
// 간접적으로 .call()함수를 통하여 호출할 수 있다.
// doTask.call(person);

// 범용 함수
function addProperty(name, value) {
    this[name] = value;
}
const student = {
    number: 10,
    name: "조하영"
}

// 직접 호출
// 전역 변수로부터 직접 호출
addProperty("grade", 5);
console.log(global.grade);

// 간접 호출
// 범용 함수로부터 간접 호출하기위한 메서드를 이용하여 호출
addProperty.call(person, "grade", 3);
console.log(person.grade);

// apply()메서드 이용, 배열로 간접 호출
addProperty.apply(person, ["address", "seoul"])
console.log(person.address);

// bind()메서드 이용
const returnMethod = addProperty.bind(person);
returnMethod("xxx", { dogname: "dog" });
returnMethod("yyy", { dogname: "dog" });
returnMethod("zzz", { dogname: "dog" });
console.log(person);
console.log(person.xxx);