class Person7 {
  constructor(public name: string, private age: number) {}
}

class Employee7 extends Person7 {
  constructor(name: string, age: number, public department: string) {
    super(name, age);
  }
}

const employee7 = new Employee7('TypeScript', 23, 'Development');

console.log(employee7.name);
console.log(employee7.department);
