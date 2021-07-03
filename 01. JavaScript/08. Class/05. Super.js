class A {
  constructor(value1) {
    this.value1 = value1;
  }

  getValue1() {
    console.log(this.value1);
  }

  func() {
    return this.value1;
  }
}

class B extends A {
  constructor(value1, value2) {
    super(value1);

    this.value2 = value2;
  }

  getValue2() {
    console.log(this.value2);
  }

  func() {
    const value1 = super.func();

    console.log(value1 + this.value2);
  }
}

const b = new B(1, 2);

b.getValue1();
b.getValue2();
b.func();
