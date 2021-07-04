const callbackHell = () => {
  setTimeout(() => {
    console.log('Callback Hell 1');

    setTimeout(() => {
      console.log('Callback Hell 2');

      setTimeout(() => {
        console.log('Callback Hell 3');

        setTimeout(() => {
          console.log('Callback Hell 4');

          setTimeout(() => {
            console.log('Callback Hell 5');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

callbackHell();
