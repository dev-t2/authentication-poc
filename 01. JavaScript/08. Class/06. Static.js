class A {
  static counter = 0;

  printCounter() {
    console.log(A.counter);
  }
}

const a1 = new A();

A.counter++;

a1.printCounter();

A.counter++;

a1.printCounter();

const a2 = new A();

a1.printCounter();

console.log(a1.counter);
console.log(a2.counter);
