const promiseFunc1 = () => {
  return new Promise((resolve, reject) => {
    console.log('Promise Function 1');

    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve('Resolve Function 1');
      } else {
        reject('Reject Function 1');
      }
    }, 1000);
  });
};

const promiseFunc2 = data => {
  return new Promise((resolve, reject) => {
    console.log('Promise Function 2');

    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve(`${data}, Resolve Function 2`);
      } else {
        reject(`${data}, Reject Function 2`);
      }
    }, 1000);
  });
};

promiseFunc1()
  .then(data => promiseFunc2(data))
  .then(data => console.log(data))
  .catch(error => console.log(error));

console.log('Waiting...');
