type Weight = number;

type PersonType = {
  name: string;
  age?: number;
  weight: Weight;
};

const person1: PersonType = {
  name: 'TypeScript',
  weight: 65,
};

console.log(person1);

const person2: PersonType = {
  name: '타입스크립트',
  age: 23,
  weight: 65,
};

console.log(person2);
