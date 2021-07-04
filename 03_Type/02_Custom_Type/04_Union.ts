interface Rectangle {
  type: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  type: 'circle';
  radius: number;
}

type Shape = Rectangle | Circle;

const area = (shape: Shape) => {
  switch (shape.type) {
    case 'rectangle':
      return shape.width * shape.height;
    case 'circle':
      return Math.PI * shape.radius ** 2;
  }
};

const rectangle: Rectangle = { type: 'rectangle', width: 10, height: 20 };

console.log(area(rectangle));

const circle: Circle = { type: 'circle', radius: 10 };

console.log(area(circle));
