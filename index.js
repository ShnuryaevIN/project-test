class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showName() {
        console.log(this.name);
    }

    showSalary() {
        console.log(this.salary);
    }
}

let user = new Employee("Ivan", 2000);

user.showName();
user.showSalary();