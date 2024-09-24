let MAX = 100;
export function makeRandomNum(max: number = MAX, start: number = 0): number {
    let r: number = Math.ceil(Math.random() * (max - start) + start);
    return r;
}
export interface IPerson {
    name: string;
    age: number;
}
export const makePerson = (name: string, age: number = makeRandomNum()): IPerson => {
    return { name, age };
}
export const makePerson2 = (name: string, age: number = makeRandomNum(30, 20)): IPerson => ({ name, age });

export const testMakePerson = (): void => {
    let p1: IPerson = makePerson('James');
    let p2: IPerson = makePerson('길동', 25);
    let p3: IPerson = makePerson2('Tom');
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

export const range = (start: number, end: number): number[] => {
    let array = start < end ? [start, ...range(start + 1, end)] : [];
    return array;
}