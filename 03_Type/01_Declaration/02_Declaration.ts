const func = (type: string, value1: number, value2: number) => {
  if (type === 'value1') {
    return value1;
  }

  if (type === 'value2') {
    return value2;
  }
};

console.log(func('value1', 1, 2));
console.log(func('value2', 1, 2));
