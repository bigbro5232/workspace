import { INameable, ITelable } from './INameable'
let obj1: object = { name: '김영희' };
let obj2: object = { tel: '010-1234' };
let obj3: object = { name: '이철수', tel: '010-233' };

console.log((<INameable>obj1).name);
console.log((<ITelable>obj2).tel);
console.log((obj3 as INameable).name);
console.log((obj3 as ITelable).tel);

