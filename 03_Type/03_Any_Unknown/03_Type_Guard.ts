type Person = {
  name: string;
};

let person3: unknown;

person3 = JSON.parse('{"nane":"TypeScript"}');

const isPerson = (object: any): object is Person => 'name' in object;

if (isPerson(person3)) {
  console.log(person3.name);
}
