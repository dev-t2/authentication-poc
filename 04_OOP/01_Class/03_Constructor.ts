class Person3 {
  public name = '';
  private age = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person3 = new Person3('TypeScript', 23);

console.log(person3.name);
