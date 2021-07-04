class A {
  constructor(value1) {
    this.value1 = value1;
  }

  method() {
    return this.value1;
  }

  methodA() {
    console.log(this.value1);
  }
}

class B extends A {
  constructor(value1, value2) {
    super(value1);

    this.value2 = value2;
  }

  method() {
    const value1 = super.method();

    console.log(value1 + this.value2);
  }

  methodB() {
    console.log(this.value2);
  }
}

const b = new B(1, 2);

b.methodA();
b.methodB();
b.method();
