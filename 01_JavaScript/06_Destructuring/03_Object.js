const message = {
  id: 1,
  user: {
    id: 1,
  },
  message: 'JavaScript',
};

const getMessage = ({ user: { id }, message }) => {
  console.log(id);
  console.log(message);
};

getMessage(message);
