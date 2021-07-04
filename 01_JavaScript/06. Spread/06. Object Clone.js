const obj = {
  name: 'JavaScript',
  next: {
    name: 'TypeScript',
  },
};

const shallowClone = { ...obj };
const deepClone = { ...obj, next: { ...obj.next } };

obj.next.name = '타입스크립트';

console.log(shallowClone);
console.log(deepClone);
