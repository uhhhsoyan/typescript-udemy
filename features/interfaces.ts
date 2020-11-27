interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

// Without interface:
const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void => {
  console.log(`Name: ${vehicle.name}`)
}

// With interface
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
}