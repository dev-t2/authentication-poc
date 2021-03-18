const MAX_AGE = 100;

interface IPerson {
  name: string;
  age: number;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

const makeRandomNumber = (max: number = MAX_AGE): number => {
  return Math.ceil(Math.random() * max);
};

const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age,
});

const testMakePerson = (): void => {
  const t2: IPerson = makePerson('t2');

  console.log(t2);
};

testMakePerson();
