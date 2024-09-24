type NumOrString = number | string;
let k: NumOrString = 10;
let z: NumOrString = "TypeScript";

type MyNumber = number;
let all: MyNumber = 10;


// 2개의 객체를 하나로 결합하여 변환
const mergeObj = <T, U>(x: T, y: U): T & U => {
    return { ...x, ...y };
}

type INameable = { name: string }
type IAgeable = { age: number }

const nameAndAge: INameable & IAgeable = mergeObj({ name: '홍' }, { age: 12 });
console.log(nameAndAge);
console.log(nameAndAge.name);
console.log(nameAndAge.age);

interface Printable {
    print(): void;
}
interface Loggable {
    log(): void;
}
type PrintLogger = Printable & Loggable;

// 클래스명: MyPrintLogger
// Printable, Loggable 인터페이스를 상속받아 에러 없도록 조치하세요

class MyPrintLogger implements Printable, Loggable {
    print(): void {
        console.log('Printing...');
    }

    log(): void {
        console.log('Logging...');
    }
}

let obj1: MyPrintLogger = new MyPrintLogger();
obj1.print();
obj1.log();
let obj2: Printable = new MyPrintLogger();
obj2.print();
// obj2.log();
(<MyPrintLogger>obj2).log(); //타입 단언을 하여 접근

let obj3: Loggable = new MyPrintLogger();
obj3.log();
// obj3.print();
(obj3 as MyPrintLogger).print();
(<MyPrintLogger>obj3).print();
console.log(('===================='));

const obj4: PrintLogger = new MyPrintLogger();
obj4.print();
obj4.log();

// Union(|)을 이용하여 타입 구분하기
// 인터페이스 3개 (ISquare, IRectangle, ICircle)
interface ISquare {
    size: number;
}
interface IRectangle {
    width: number;
    height: number;
}
interface ICircle {
    radius: number;
}

// 인터페이스 타입의 객체 생성
const sq: ISquare = { size: 10 };
const rt: IRectangle = { width: 10, height: 15 };
const cr: ICircle = { radius: 10 };

type IShape = ISquare | IRectangle | ICircle;
// getArea() 함수에 객체들을 인수로 전달하면 면적을 구해서 전달

const getArea = (args: IShape): number => {
    return 0;
}
// 위 함수는 어떤 타입에 객체인지 구분해야 면적을 구할수 있다.
//  ==> 타입스크립트는 합집합 타입의 가가을 구분할 수 있는 식별 합집합 이라는
// 구문을 제공한다. ==> ex07_3.ts,ex07_4.ts 참고

