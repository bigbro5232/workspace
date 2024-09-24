import { makeRandomNum } from "../myUtil/util"

for (let i = 0; i < 5; i++) {
    let num = makeRandomNum();
    console.log(num);
}
for (let i = 0; i < 5; i++) {
    let num = makeRandomNum(17);
    console.log(num);
}