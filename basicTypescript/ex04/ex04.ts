class Superman {
    name: string = "";
    height: number = 160;
    power?: number;
}
let peter: Superman = new Superman();
console.log(peter.name, peter.height);
peter.name = 'Peter';
peter.height = 170;
peter.power = 500;
console.log(peter.name, peter.height, peter.power);


class Aquaman {
    constructor(public name: string, public height: number, public speed?: number) {

    }
}
let a1: Aquaman = new Aquaman("인어공주", 170, 150);
console.log(a1);
let a2: Aquaman = new Aquaman('고등어', 50);
console.log(a2);


class Human {
    name: string;
    height: number;
    constructor(name: string, height: number) {
        this.name = name;
        this.height = height;
    }
}

let h1: Human = new Human('홍길돔', 150);
console.log(h1);

interface iPerson {
    name: string;
    age: number;
    height?: number;
}

class Person implements iPerson {
    name: string = "홍길동";
    age: number = 20;
    public showInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
let p1: Person = new Person();
console.log(p1);
let p2: Person = new Person();
p2.name = "김길동";
p2.age = 30;
let str = p2.showInfo();
console.log(str);

class Woman {
    name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    info(): void {
        console.log(`Hello ${this.name}, age: ${this.age}`);
    }
}
let w1: Woman = new Woman('asd', 20);
console.log('w1.name: ', w1.name);
// console.log(('w1.age: ', w1.age));
w1.info();

class SuperWoman extends Woman {
    constructor(public name: string = 'SuperWoman', public age: number = 20, public power: number = 150) {
        super(name, age);
    }
}
let sw1: SuperWoman = new SuperWoman('김영희', 25, 400);
console.log(sw1);

