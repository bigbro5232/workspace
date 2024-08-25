// 07/31

const printLetter = function () {
    console.log("A");
    setTimeout(() => {
        console.log("B");
    }, 5000);
    setTimeout(() => {
        console.log("C");
    }, 3000);
    setTimeout(() => {
        console.log("D");
    }, 1000);
}

printLetter();