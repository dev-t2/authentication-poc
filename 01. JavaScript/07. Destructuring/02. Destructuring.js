const getName = () => {
  return {
    name: 'JavaScript',
    next: 'TypeScript',
  };
};

const { name, next } = getName();

console.log(name);
console.log(next);
