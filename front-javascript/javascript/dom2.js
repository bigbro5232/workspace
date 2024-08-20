const profile = document.querySelector("#profile");
console.log(profile.constructor);
console.dir(profile);

// console.log(document.querySelector("h2"));
const nodeList = document.querySelectorAll("h2");
console.log(nodeList);
let h2 = nodeList[1];
h2 = nodeList.item(1);
console.log(h2);
nodeList.forEach((element) => {
    element.style.color = "#ffff00";
});

const img = document.querySelector("#profile img");
console.log(img);

const list = document.querySelector("#list")
console.log(list.children);
console.log(list.childNodes);
console.log(list.childNodes[1]);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
// console.log(list.parentElement.style.display = "none");
console.log(list.children[1].previousElementSibling);
console.log(list.children[1].nextElementSibling);

// 요소의 내용의
// console.log(list.firstElementChild.innerHTML);
// console.log(list.firstElementChild.textContent);
// console.log(list.firstElementChild.outerHTML);

// 요소 내용 수정
list.lastElementChild.innerHTML = "<b>자바스크립트</b>";
list.lastElementChild.textContent = "<b>자바스크립트</b>";
