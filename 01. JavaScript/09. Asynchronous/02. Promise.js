const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    console.log('Promise Function');

    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve('Resolve');
      } else {
        reject('Reject');
      }
    }, 1000);
  });
};

promiseFunc()
  .then(data => console.log(data))
  .catch(error => console.log(error));

console.log('Waiting for result');
