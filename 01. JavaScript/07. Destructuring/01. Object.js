const getName = () => {
  return {
    name: 'JavaScript',
    next: 'TypeScript',
  };
};

const name = getName().name;
const next = getName().next;

console.log(name);
console.log(next);
