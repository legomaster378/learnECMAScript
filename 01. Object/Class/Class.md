# Class

```js

// new Car(); //BROKEN CODE no-hoisting

const createCar = function() {
  return new Car();
};

class Car {}

console.log(createCar()); //Car {}

console.log(Car); //[Function: Car]

console.log(Reflect.ownKeys(Car.prototype)); //[ 'constructor' ]
```

## Constructors

```js
class Car {
  constructor(year) {
    this.year = year;
  }
}

console.log(new Car(2018)); //Car { year: 2018 }

```

## Properties and Methods

```js
class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }
  
  drive(distance) {
    this.miles += distance;
  }
}

console.log(Reflect.ownKeys(Car.prototype));

const car = new Car(2018);
console.log(car);
console.log(`car.year ${car.year}, car.miles ${car.miles}`);

car.drive(10);
console.log(car);
```

getter

```js
class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }
  
  drive(distance) {
    this.miles += distance;
  }
  
  getAge() {
    return new Date().getFullYear() - this.year;
  }

  get age() {
    return new Date().getFullYear() - this.year;
  }
}

const car = new Car(2007);

console.log(car.getAge());

console.log(car.age);

car.age = 7; // won't work

console.log(car.age);
```

setter

```js
class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }
  
  drive(distance) {
    this.miles += distance;
  }
  
  get age() {
    return new Date().getFullYear() - this.year;
  }

  get distanceTraveled() { return this.miles; }

  set distanceTraveled(value) {
    if(value < this.miles) {
      throw new Error(
        `Sorry, can't set value to less than current distance traveled.`);
    }

    this.miles = value;
  }
}

const car = new Car(2007);
car.drive(10);

console.log(car.distanceTraveled);

car.distanceTraveled = 14;
console.log(car.distanceTraveled);

try {
  car.distanceTraveled = 1;
} catch(ex) {
  console.log(ex.message);
}
```

Computed Members

```js
const NYD = `New Year's Day`;

class Holidays {
  constructor() {
    this[NYD] = 'January 1';
    this["Valentine's Day"] = 'February 14';
  }
  
  ['list holidays']() {
    return Object.keys(this);
  }
}

const usHolidays = new Holidays();
usHolidays['4th of July'] = 'July 4';

console.log(usHolidays[`Valentine's Day`]);
const methodName = 'list holidays';
console.log(usHolidays[methodName]());
```

## Static member

```js
class Car {
  constructor(year) {
    this.year = year;
    this.miles = 0;
  }
  
  drive(distance) {
    this.miles += distance;
  }
  
  get age() {
    return new Date().getFullYear() - this.year;
  }

  get distanceTraveled() { return this.miles; }

  set distanceTraveled(value) {
    if(value < this.miles) {
      throw new Error(
        `Sorry, can't set value to less than current distance traveled.`);
    }

    this.miles = value;
  }

  static get ageFactor() { return 0.1; }

  static pickBetter(carA, carB) {
    const computeScore = car =>
      car.age * Car.ageFactor + car.distanceTraveled * Car.distanceFactor;
    return computeScore(carA) < computeScore(carB) ? carA : carB;
  }
}

Car.distanceFactor = 0.01; //This goes outside class Car {...}

const car1 = new Car(2007);
car1.drive(150000);

const car2 = new Car(2010);
car2.drive(175000);

console.log(Car.pickBetter(car1, car2));
```

## prototype

```js
class Counter {}

Counter.prototype.count = 0;
Counter.prototype.increment = function() { this.count += 1; };

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.count);
console.log(counter2.count);

counter1.increment();
console.log(counter1.count);
console.log(counter2.count);
```

Reflection

```js
class Counter {}

Counter.prototype.count = 0;
Counter.prototype.increment = function() { this.count += 1; };

const counter1 = new Counter();

console.log(
  `Prototype has: ${Object.keys(Reflect.getPrototypeOf(counter1))}`);

console.log(`Before increment instance has: ${Object.keys(counter1)}`);
counter1.increment();
console.log(`After increment instance has: ${Object.keys(counter1)}`);
```

## inheritance

```js
class Person {
  constructor(firstName, lastName) {
    console.log('initializing Person fields');
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  toString() {
    return `Name: ${this.firstName} ${this.lastName}`;
  }
  
  get fullName() { return `${this.firstName} ${this.lastName}`; }
  
  get surname() { return this.lastName; }
}

class ReputablePerson extends Person {
  constructor(firstName, lastName, rating) {
    console.log('creating a ReputablePerson');
    super(firstName, lastName);
    this.rating = rating;
  }

  toString() {
    return `${super.toString()} Rating: ${this.rating}`;
  }
  
  get fullName() {
    return `Reputed ${this.surname}, ${super.fullName} `;
  }
  
}

const alan = new ReputablePerson('Alan', 'Turing', 5);
console.log(alan.toString());
console.log(alan.fullName);
```

```js
class Person {
  constructor(firstName, lastName) {
    console.log('initializing Person fields');
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  toString() {
    return `Name: ${this.firstName} ${this.lastName}`;
  }
  
  get fullName() { return `${this.firstName} ${this.lastName}`; }
}

class ReputablePerson extends Person {
  constructor(firstName, lastName, rating) {
    console.log('creating a ReputablePerson');
    super(firstName, lastName);
    this.rating = rating;
  }

  toString() {
    return `${super.toString()} Rating: ${this.rating}`;
  }
  
  get fullName() {
    return `Reputed ${this.lastName}, ${super.fullName} `;
  }
}

const printPrototypeHierarchy = function(instance) {
  if(instance !== null) {
    console.log(instance);
    printPrototypeHierarchy(Reflect.getPrototypeOf(instance));
  }
};

const alan = new ReputablePerson('Alan', 'Turing', 5);

printPrototypeHierarchy(alan);

class ComputerWiz {}

Reflect.setPrototypeOf(Reflect.getPrototypeOf(alan), ComputerWiz.prototype);

console.log('...after change of prototype...');

printPrototypeHierarchy(alan);

const ada = new ReputablePerson('Ada', 'Lovelace', 5);
printPrototypeHierarchy(ada);

```

### super

```js
class Base {}

class Derived1 extends Base {
  constructor() {
    console.log('Derived1');
    super();
    this.something = 4;
  }
}

class Derived2 extends Base {
  constructor() {
    console.log('Derived2');
    this.something = 4;
  }
}

class Derived3 extends Base {
  constructor() {
    console.log('Derived3');
    this.something = 4;
    super();
  }
}

class Derived4 extends Base {
}

new Derived1();

try {
  new Derived2();
}catch(ex) {
  console.log(ex.message);
}

try {
  new Derived3();
}catch(ex) {
  console.log(ex.message);
}

new Derived4();
console.log('done');
```