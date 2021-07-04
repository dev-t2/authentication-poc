class Person8 {
  constructor(public name: string, private age: number) {}

  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

class Employee8 extends Person8 {
  constructor(name: string, age: number, public department: string) {
    super(name, age);
  }

  private printSayHello() {
    console.log(`Department: ${this.department}`);
  }

  sayHello() {
    super.sayHello();

    this.printSayHello();
  }
}

const employee8 = new Employee8('TypeScript', 23, 'Development');

employee8.sayHello();
