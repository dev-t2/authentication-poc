class Person1 {
  name = '';
  age = 0;

  sayHello() {
    return 'Hello TypeScript';
  }
}

class Employee1 extends Person1 {
  department = '';
}

const employee = new Employee1();

console.log(employee);
console.log(employee.sayHello());
