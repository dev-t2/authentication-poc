enum Direction {
  FtoC,
  CtoF,
}

const convertTemperature = (temp: number, fromTo: Direction) => {
  return Direction.FtoC === fromTo
    ? ((temp - 32) * 5.0) / 9.0
    : (temp * 9.0) / 5.0 + 32;
};

console.log(convertTemperature(70, Direction.FtoC));
console.log(convertTemperature(21, Direction.CtoF));
