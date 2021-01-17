const name = 'DeveloperT2';
const age = 33;
const gender = 'male';

const person = (name, age, gender?) => {
  console.log({ name, age, gender });
};

person(name, age);

export {};
