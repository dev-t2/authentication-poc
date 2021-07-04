const obj = { name: 'JavaScript' };

const clone = Object.assign({}, obj);

console.log(clone);

const modifiedClone = Object.assign({}, obj, { name: '자바스크립트' });

console.log(modifiedClone);
