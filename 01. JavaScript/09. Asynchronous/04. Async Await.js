const promiseFunc1 = () => {
  return new Promise((resolve, reject) => {
    console.log('Promise Function 1');

    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve('Resolve 1');
      } else {
        reject('Reject 1');
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
        resolve(`${data}, Resolve 2`);
      } else {
        reject(`${data}, Reject 2`);
      }
    }, 1000);
  });
};

const asyncFunc = async () => {
  try {
    const result1 = await promiseFunc1();
    const result2 = await promiseFunc2(result1);

    console.log(result2);
  } catch (error) {
    console.log(error);
  }
};

asyncFunc();

console.log('Waiting for result');
