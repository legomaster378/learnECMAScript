# Inheritance

A derived / child class can inherit all the properties and methods from the super / base class using extends.

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

class AwesomePerson extends Person {
  get fullName() {
    return `Awesome ${super.fullName}`;
  }
}

const alan = new ReputablePerson('Alan', 'Turing', 5);
console.log(alan.toString());
console.log(alan.fullName);

const ball = new AwesomePerson('Lucille', 'Ball');
console.log(ball.fullName);
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

## super

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

## Symbol.species in Inheritance

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species>

```js
class Names {
  constructor(...names) {
    this.names = names;
  }

  filter1(selector) {
    return new Names(...this.names.filter(selector));
  }

  filter2(selector) {
    const constructor = Reflect.getPrototypeOf(this).constructor;

    return new constructor(...this.names.filter(selector));
  }

  filter3(selector) {
    const constructor = 
      Reflect.getPrototypeOf(this).constructor[Symbol.species] ||
        Reflect.getPrototypeOf(this).constructor;
    return new constructor(...this.names.filter(selector));
  }
}

class SpecializedNames extends Names {
  static get [Symbol.species]() {
    return Names;
  }
}

const specializedNames = new SpecializedNames('Java', 'C#', 'JavaScript');

console.log(specializedNames.filter1(name => name.startsWith('Java')));

console.log(specializedNames.filter2(name => name.startsWith('Java')));

console.log(specializedNames.filter3(name => name.startsWith('Java')));
```

## prototypal inheritance

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

## Class Reflection

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

## extending Array

```js
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}

const concArray = new MyArray().concat(new MyArray());
console.log(`instanceof MyArray?: ${concArray instanceof MyArray}`);
```

string is different from array

```js
class MyString extends String {}
class MyArray extends Array {}

const concString = new MyString().concat(new MyString());
const concArray = new MyArray().concat(new MyArray());

console.log(`concString instanceof String?: ${concString instanceof String}`);
console.log(`concString instanceof MyString?: ${concString instanceof MyString}`);

console.log(`concArray instanceof Array?: ${concArray instanceof Array}`);
console.log(`concArray instanceof MyArray?: ${concArray instanceof MyArray}`);
```
