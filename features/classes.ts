class Vehicle {
  constructor(public color: string) {}

  /* long form of the above
  color: string;

  constructor(color: string) {
    this.color = color;
  }
  *

  drive(): void {
    console.log('vroom');
  }
  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();

class sedan extends Vehicle {
  drive(): void {
    console.log('Im a sedan!')
  }
}

vehicle.drive();