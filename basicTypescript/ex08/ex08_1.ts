// 타입 가드(guard) : 조건분 안에서 타입의 범위를 한정시켜주는 방법
//                  instanceOf 연산자, typeof 연산자등을 사용해서
//                  타입의 범위를 좁힐 수 있다

export class Bird {
    fly(): void {
        console.log('fly');
    }
}

export class Fish {
    swim(): void {
        console.log('swim');
    }
}

export const flyOrswim = (obj: Bird | Fish): void => {
    // instanceof 연산자를 이용해 타입의 범위를 좁혀보기 => 타입가드
    // 변수 instanceof 클래스명 : 변수가 클래스의 객체면 true반환,
    // 아니면 false 반환
    if (obj instanceof Bird) {
        (<Bird>obj).fly(); // 타입 단언을 하면 컴파일 타임에는 문제없음
    } else if (obj instanceof Fish) {
        (obj as Fish).swim(); // 실행타임에서 에러 발생
    }
}

let b: Bird = new Bird();
let f: Fish = new Fish();
flyOrswim(b);
flyOrswim(f);

let array: Array<Bird | Fish> = [f, b, new Bird(), new Fish()]
console.log(array);
array.forEach(flyOrswim);