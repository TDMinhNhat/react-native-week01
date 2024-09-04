// Your tasks: 
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
// 'speed' property. The 'speed' property is the current speed of the car in 
// km/h 
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, 
// and log the new speed to the console 
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
// the new speed to the console 
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
// 'brake' multiple times on each of them

class Car {
    constructor(make, speed) { 
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`The new speed is ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`The new speed is ${this.speed} km/h`);
    }
}

//Data 1:
const car1 = new Car('BMW', 120);
car1.accelerate();
car1.brake();

//Data 2:
const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.brake();