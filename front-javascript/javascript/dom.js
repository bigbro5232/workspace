const h2Element = document.getElementById("title");
console.dir(h2Element);
h2Element.style.color = "red";

// const h2s = document.getElementsByTagName("h2");
// console.log(h2s);
//  for (const element of h2s) {
//     element.style.background = "blue";
//  }
const h2s = document.getElementsByClassName("sub-title");
console.log(h2s);
for (const element of h2s) {
    element.style.background = "blue";
    // element.remove();
}