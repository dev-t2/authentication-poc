class Person2 {
  public name = 'TypeScript';
  private age = 0;

  protected sayHello() {
    return `Hello ${this.name}`;
  }
}

class Employee2 extends Person2 {
  department = 'Development';

  performance() {
    return this.sayHello();
  }
}

const employee2 = new Employee2();

console.log(employee2.name);
// console.log(employee2.age);
console.log(employee2.department);
// console.log(employee2.sayHello());
console.log(employee2.performance());
