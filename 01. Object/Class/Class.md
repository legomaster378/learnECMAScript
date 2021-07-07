# Class

A class is a template which defines how objects of that type behave.

<https://devdocs.io/javascript/statements/class>

Class declarations execute in strict mode; there's no need to add 'use strict'.

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

## Properties

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

### getter

Setters are special methods used to define values only. Similarly, Getters are special methods used to return a value only.

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

  // in Java and some other languages  
  getAge() {
    return new Date().getFullYear() - this.year;
  }
}

const car = new Car(2007);

console.log(car.getAge());

console.log(car.age);

car.age = 7; // won't work

console.log(car.age);
```

### setter

settter can take one parameter `value` only.

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

## Methods

Methods are functions that belong to the class.

In the above example, drive() method can be accessed publicly by default.

## Computed Members

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

## Constructors

A constructor method is run when an object of this type is created, and it typically defines initial properties. 

```js
class Car {
  constructor(year) {
    this.year = year;
  }
}

console.log(new Car(2018)); //Car { year: 2018 }

```

## Static member

Defining a method with the static keyword allows it to be called on a class without creating an object instance. JavaScript doesn’t support static properties in the same way as other languages, but it is possible to add properties to the class definition.

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

## static method

static method can only access not instance fields.

## More readings

<https://www.sitepoint.com/javascript-private-class-fields/>
