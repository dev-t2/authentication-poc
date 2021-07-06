export interface MotorVehicle {
  startEngine(): boolean;
  stopEngine(): boolean;
  brake(): boolean;
  accelerate(speed: number);
  honk(howLong: number): void;
}

class Car implements MotorVehicle {
  startEngine(): boolean {
    return true;
  }

  stopEngine(): boolean {
    return true;
  }

  brake(): boolean {
    return true;
  }

  accelerate(speed: number) {
    console.log('Speed Up');
  }

  honk(howLong: number) {
    console.log('Sound On');
  }
}

const car = new Car();

car.accelerate(10);
car.honk(10);
