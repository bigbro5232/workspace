// console.log(window);

// window 생략 가능

// const string = new String("1");
// const string = new window.String("1");

// console.log("A");
// window.console.log("A");

// 대표적인 프로퍼티
// console.log(innerWidth);
// console.log(innerHeight);

// 대표적인 메서드
// open();
// close();
// alert("javascript");
// const result = confirm("hello");
// console.log(result);
// const result = prompt("hello", 10);
// console.log(typeof result, result);

// const result = prompt("num", 10);

// open("hello.html", "pop");
// open("https://www.daum.net", "pop");
// const pop = open("https://www.daum.net", "pop");
// console.log(pop);
// if(!pop){
//     alert("error");
// }
// pop.close();

// sweetalert2 사용 에제
Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
}).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
    }
});
