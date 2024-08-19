// 07/24


var globalMessage1 = "전역 메세지1";
let globalMessage2 = "전역 메세지2";

function printMessage() {
    let loaclMessage = "지역 메세지";
    console.log(globalMessage1);
    console.log(globalMessage2);
    console.log(loaclMessage);


    const innerFunction = function () {
        let some = "a";
        console.log(some);
        console.log(loaclMessage);
    }
}
// function printMessage2(){
//     let loaclMessage = "지역 메세지";
//     console.log(globalMessage1);
//     console.log(globalMessage2);
//     console.log(loaclMessage);
// }

console.log(globalMessage1);
console.log(globalMessage2);

printMessage();

const user = {
    name: "조하영",
    sayHello: function () {
        console.log(this.name);
    }
};


user.sayHello();
// printMessage2();