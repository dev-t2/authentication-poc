interface IPerson {
  name: string;
  age: number;
}

const savePerson = (person: IPerson) => {
  console.log(person.name, person.age);
};

const person: IPerson = {
  name: 'TypeScript',
  age: 23,
};

savePerson(person);
