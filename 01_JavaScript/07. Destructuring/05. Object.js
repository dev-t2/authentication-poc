const message = {
  id: 1,
  user: {
    id: 1,
  },
  message: 'JavaScript',
};

const getMessage = ({ id, ...other }) => {
  console.log(id);
  console.log(other);
};

getMessage(message);
