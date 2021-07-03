const sum1 = (args1, args2) => args1 + args2;

console.log(sum1(1, 2));

const sum2 = (args1, args2) => {
  const sum = args1 + args2;

  return sum;
};

console.log(sum2(1, 2));

const getName1 = () => {
  return 'JavaScript';
};

console.log(getName1());

const getName2 = name => {
  return `Hello ${name}`;
};

console.log(getName2('자바스크립트'));
