type Person = {
  name: string;
};

let person: any;

person = JSON.parse('{"nane":"TypeScript"}');

console.log(person.name);
