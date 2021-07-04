class Dog {
  constructor(readonly name: string) {}

  sayHello() {
    return 'Hello World';
  }
}

class Fish {
  constructor(readonly name: string) {}

  dive(howDeep: number) {
    return `${howDeep} m`;
  }
}

type Pet = Dog | Fish;

const talkToPet = (pet: Pet) => {
  if (pet instanceof Dog) {
    return pet.sayHello();
  }
};

const dog = new Dog('TypeScript');
const fish = new Fish('타입스크립트');

console.log(dog.name);
console.log(fish.name);

console.log(talkToPet(dog));
console.log(talkToPet(fish));
