// 추상클래스
// abstract 키워드를 사용해 추상클래스를 만들 수 있다.
// 추상클래스의 목적은 이를 상속받는 자식 클래스에서 추상클래스의 속성이나 메서드를 강제로 구현하게 하려는 목적이다.
// 추상클래스는 new연산자를 이용해 객체를 만들 수 없다. 이를 상속받은 자식클래스 객체로는 객체 생성이 가능하다.
/**
 
abstract class 클래스명{
abstract 속성명:속성타입
abstract 메서드명():반환타입{}
}
*/
abstract class AbstractPerson {
    abstract name: string;
    constructor(public age?: number) { }
    abstract showInfo(): void;
}

class myPerson extends AbstractPerson {
    constructor(public name: string, public age: number) {
        super(age);
    }
    showInfo(): void {
        const str = `이름:${this.name} 나이:${this.age}`;
        console.log(str);
    }
}

let my1: myPerson = new myPerson('고길동', 40);
let my2: AbstractPerson = new myPerson('홍길동', 30);
console.log(my1);
console.log(my2);
