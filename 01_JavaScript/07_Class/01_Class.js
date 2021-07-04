class A {}
class B extends A {}

const b1 = new B();
const b2 = new B();

console.log(b1);
console.log(b2);
console.log(b1 === b2);
