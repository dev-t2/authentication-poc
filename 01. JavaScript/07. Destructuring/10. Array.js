const getLanguages = ([a, b, ...other]) => {
  console.log(a);
  console.log(b);
  console.log(other);
};

const languages = ['JavaScript', '자바스크립트', 'TypeScript', '타입스크립트'];

getLanguages(languages);
