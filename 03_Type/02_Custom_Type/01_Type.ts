type Weight = number;

type Person = {
  name: string;
  age?: number;
  weight: Weight;
};

const person1: Person = {
  name: 'TypeScript',
  weight: 65,
};

console.log(person1);

const person2: Person = {
  name: '타입스크립트',
  age: 23,
  weight: 65,
};

console.log(person2);
