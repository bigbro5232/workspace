import { config } from "process";

let obj: object = { name: 'tom', addr: 'LA' }
console.log((<{ name: 'tom', addr: "LA" }>obj).name, (<{ name: 'tom', addr: "LA" }>obj).addr);
console.log(obj);

obj = { first_name: 'Tom', last_name: 'Kim' }
console.log(obj);


interface Person {
    name: string;
    age: number;
    height: number | undefined;
    profile: string[] | undefined
}

let a: Person = {
    name: 'Tom',
    age: 12,
    height: 145,
    profile: undefined
}
console.log(a.name, a.age, a.height, a.profile);

interface Student {
    no: number;
    name: string;
    tel?: string;

}
let s1: Student = { no: 123, name: 'qwer', tel: '123-456-7890' }
console.log(s1);
function showInfo(user: { name: string, age: number, etc?: boolean }) {
    let str = user.etc ? `Name:${user.name}, Age:${user.age}, ETC:${user.etc}` :
        `Name:${user.name}, Age: ${user.age}`;
    console.log(str);

}
showInfo({ name: 'kim', age: 23 })
showInfo({ name: 'ker', age: 25, etc: true })

let user1 = { name: 'asd', age: 23, etc: false, hobby: 'reqr' }
showInfo(user1)

function printLabel(labelObj: { label: string }): void {
    console.log((labelObj.label));

}
let item = { label: 'asd', size: 170 }
printLabel(item);
printLabel({ label: 'asdf' })
// printLabel({ label: 'asdf', size: 270 })

interface SquareConfig {
    color?: string;
    width?: number;
    height?: number
}

interface ShapeArea {
    color: string;
    area: number;
}

function createSquare(config: SquareConfig): ShapeArea {
    let newSquare: ShapeArea = { color: 'white', area: 0 }
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = Math.pow(config.width, 2);
    }
    return newSquare;
}

let r1: ShapeArea = createSquare({ color: 'orange' });
console.log(r1);

let r2 = createSquare({ width: 8 });
console.log(r2);

let r3 = createSquare({});
console.log(r3);

console.log(createSquare({ color: 'red', width: 12 }));

interface Point {
    readonly x: number;
    y: number;
}
let p2: Point = { x: 10, y: 20 };
console.log(p2.x, p2.y);
// p2.x = 200;
p2.y = 300;
console.log(p2.x, p2.y);

let arr1: number[] = [1, 2, 3, 4]
let arr2: ReadonlyArray<number> = arr1;

arr1.push(5);
console.log(arr1);
arr1[0] = 100;
console.log(arr1);
arr1.splice(1, 2);
console.log(arr1);

let arr3: string[] = ['hello', 'hi', 'bye']
let arr4 = arr3;

console.log(arr3);
console.log(arr4);

arr4[1] = 'allo';
console.log(arr4);
console.log(arr3);

let arr5 = [...arr3];
console.log(arr5);
arr5[1] = 'hi';
console.log(arr5);
console.log(arr3);

