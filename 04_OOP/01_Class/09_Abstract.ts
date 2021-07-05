abstract class Person9 {
  constructor(public name: string) {}

  changeAddress(address: string) {
    console.log(address);
  }

  giveDayOff() {
    console.log(this.name);
  }

  abstract increasePay(percent: number): void;

  promote(percent: number) {
    this.giveDayOff();
    this.increasePay(percent);
  }
}

class Employee9 extends Person9 {
  increasePay(percent: number) {
    console.log(`Employee ${this.name} by ${percent}`);
  }
}

class Contractor9 extends Person9 {
  increasePay(percent: number) {
    console.log(`Contractor ${this.name} by ${percent}`);
  }
}

const workers: Person9[] = [];

workers[0] = new Employee9('TypeScript');
workers[1] = new Contractor9('타입스크립트');

workers.map(worker => worker.promote(5));
