class Person {
  name: string;
  age: number;
}

class Customer {
  name: string;
  // weight: number;
}

const customer: Customer = new Person();

console.log(customer);
