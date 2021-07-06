enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

const union = (direction: 'Up' | 'Down' | 'Left' | 'Right') => {
  console.log(direction);
};

type DirectionType = 'Up' | 'Down' | 'Left' | 'Right';
