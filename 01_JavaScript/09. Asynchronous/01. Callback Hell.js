const callbackHell = () => {
  setTimeout(() => {
    console.log('callbackHell 1');

    setTimeout(() => {
      console.log('callbackHell 2');

      setTimeout(() => {
        console.log('callbackHell 3');

        setTimeout(() => {
          console.log('callbackHell 4');

          setTimeout(() => {
            console.log('callbackHell 5');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

callbackHell();
