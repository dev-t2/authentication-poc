const age = 25;

const getTax = (income: number) => {
  return income * 0.15;
};

const myTax = getTax(10000);

console.log(myTax);
