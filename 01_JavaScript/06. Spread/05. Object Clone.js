const obj = { name: 'JavaScript' };

const clone = { ...obj };

console.log(clone);

const modifiedClone = { ...obj, name: '자바스크립트' };

console.log(modifiedClone);
