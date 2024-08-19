// 07/23

// 클래스 생성
class Employee {

    // 정적 메서드 예제
    static commonMethod() {
        console.log("공통기능입니다.");
    }

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    // setter/getter(캡슐화)
    // set name(name) {
    //     // console.log("set name called...");
    //     if (name!) {
    //         this._name = name;
    //     }
    //     this._name = name;
    // }
    // get name() {
    //     return this._name;
    // }
    // set salary(salary) {
    //     if (salary <= 0) {
    //         throw new Error("급여x"); // 예외처리
    //     }
    //     this._salary = salary;
    // }
    // get salary() {
    //     return this._salary;
    // }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
    toString() {
        console.log(`이름: ${this.name}, 급여: ${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }

    toString() {
        console.log(`이름: ${this.name}, 급여: ${this.salary}, 보너스: ${this.bonus}`);
    }
}

const manager = new Manager("조하영", 1000, 100);
console.log(manager.getSalary());
console.log(manager.toString());

// const employee = new Employee("조하영", 1000);
// // employee._name += "헐";
// employee.toString();

// // console.log(employee._name);
// console.log(employee.name);
// employee.salary = 100;
// console.log(employee.salary);
// // employee.salary = -1; // 예외처리 결과

// Employee.commonMethod();