class A {
  constructor(value) {
    this.value = value;
  }
}

class B extends A {}

const b = new B(41);

console.log(b.value);
