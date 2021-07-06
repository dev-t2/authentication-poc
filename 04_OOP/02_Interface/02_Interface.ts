import { MotorVehicle } from './01_Interface';

interface Flyable extends MotorVehicle {
  fly(howHigh: number);
  land();
}

interface Swimmable {
  swim(howFar: number);
}

class SecretServiceCar implements Flyable, Swimmable {
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

  fly(howHigh: number) {
    console.log('High High');
  }

  land() {
    console.log('Landing...');
  }

  swim(howFar: number) {
    console.log('swimming');
  }
}

const secretServiceCar = new SecretServiceCar();

secretServiceCar.accelerate(10);
secretServiceCar.honk(10);
secretServiceCar.fly(10);
secretServiceCar.land();
secretServiceCar.swim(10);
