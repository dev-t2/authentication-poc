class Human {
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public name: string;
  public age: number;
  public gender: string;
}

const person = new Human('T2', 33, 'male');

const sayHello = (person: Human): string => {
  return `TypeScript => name: ${person.name}, age: ${person.age}, gender: ${person.gender}`;
};

console.log(sayHello(person));

export {};
