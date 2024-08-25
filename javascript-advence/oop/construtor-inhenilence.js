// 07/23

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype.getName = function () {
    return this.name;
}

Employee.prototype.getSalary = function () {
    return this.salary;
}

Employee.prototype.toString = function () {
    return `이름: ${this.name}, 급여: ${this.salary}`;
}

const employee = new Employee("조하영", 1000);
// console.log(employee.getName());
// console.log(employee.toString());

// 생성자 상속
function Manager(name, salary, bonus) {

    // this.name = name;
    // this.salary = salary;

    /*
    Employee 생성자 함수로부터 call()메서드를 이용하여 간접호출하여
    프로퍼티와 메서드를 상속받아 재사용할 수 있다.
    */
    Employee.call(this, name, salary);
    this.bonus = bonus;
}

Object.setPrototypeOf(Manager.prototype, Employee.prototype);

Manager.prototype.getBonus = function () {
    return this.bonus;
}

Manager.prototype.getSalary = function () {
    return this.salary + this.bonus;
}

Manager.prototype.toString = function () {
    return `이름: ${this.name}, 급여: ${this.salary + this.bonus}`;
}

const manager = new Manager("이재명", 1000, 100);
console.log(manager.name, manager.bonus);
// 생서자간의 상속이 되었다고 prototype간의 상속이 되지않아
// toString()메서드가 최상위객체인 object에서 실행된다.

console.log(manager.getName());
console.log(manager.getBonus());
console.log(manager.getSalary());
console.log(manager.toString());

console.log(employee instanceof Object);
console.log(employee instanceof Manager);
console.log(employee instanceof String);

function soTask(employee){
    if(employee instanceof Employee){
        console.log("원하는 기능 수행");
    }else{
        console.log(("안됨"));
    }
}

doTask(employee);
doTask(manager);
doTask(new Date());