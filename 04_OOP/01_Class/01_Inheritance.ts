class Person1 {
  name = 'TypeScript';
  age = 0;

  sayHello() {
    return `Hello ${this.name}`;
  }
}

class Employee1 extends Person1 {
  department = 'Development';
}

const employee1 = new Employee1();

console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.department);
console.log(employee1.sayHello());
