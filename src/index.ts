interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: 'DeveloperT2',
  age: 33,
  gender: 'male',
};

const sayHello = (person: Human): string => {
  return `TypeScript => name: ${person.name}, age: ${person.age}, gender: ${person.gender}`;
};

console.log(sayHello(person));

export {};
