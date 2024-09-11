class Animal {
    constructor(public name: string = '') { }
    move(meters: number): void {
        console.log(`${this.name}이 ${meters}이동`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    bark(): void {
        console.log(`멍멍`);
    }
}

let animal1: Animal = new Animal('dog');
animal1.move(15);
// console.log(animal1.move(15));

let d1: Dog = new Dog('Dog');
d1.bark();

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(meter: number): void {
        console.log(`${this.name}이 ${meter}m 기어감`);
    }
}

let s1: Snake = new Snake('snake');
s1.move(23);