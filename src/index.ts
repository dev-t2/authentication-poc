const person = (name: string, age: number, gender: string): string => {
  return `TypeScript => name: ${name}, age: ${age}, gender: ${gender}`;
};

console.log(person('DeveloperT2', 33, 'male'));

export {};
