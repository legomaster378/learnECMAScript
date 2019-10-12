# Object

Object by default is a key value collection of data / function member.

## key value pair collection

```js
var onePerson = {
  name: 'Pete',
  age: 15
};
for (var propKey in onePerson) {
  console.log(propKey + ': ' + onePerson[propKey]);
}
```

## instantiation

To instantiate an object, you can use

- object literal
- object constructor
- factory methods with prototype

An object literal is a pair of curly braces surrounding zero or more name/value pairs.

{} literally means new Object() which news up the empty object, and { "key1":"value1", …, …} is newing up object with properties.

```js
var x = {}; //an empty object
var y = {
  name: 'Pete',
  age: 15
};
// all the properties are public
```

If the key only contains letters and underscore, then it is legitimate to use it without quotations. Otherwise, if it has dash- or other characters, it is required to use quotation.

The value can be a function, and `this` refers to the instance itself.

```js
var cody = {
  living: true,
  age: 33,
  gender: 'male',
  getGender: function() {
    return this.gender;
  }
};
console.log(cody.getGender()); // male
console.log(cody.getGender); // incorrect, show the function
```

## new operator as object constructor

Objects are created by using constructors in new expressions; for example, new Date(2009,11) creates a new Date object.

Objects / instances can be created in various ways including via a literal notation or via constructors, and initialized at the same time by assigning initial values to their properties.

Each constructor is a function that has a property named "prototype" that is used to implement prototype-based inheritance and shared properties.

When a constructor is called with the new operator, an object is created before the first line of the constructor is executed; that object is accessible (at that point) only by using `this`. It is then possible to assign properties directly to `this` that is returned as the function value by default (no need to explicitly use the return operator).

### instanceof operator

instanceof determines whether an object derives from a particular type.

```js
var oStringObject = new String('hello world');
alert(oStringObject instanceof String); //outputs "true"
var x = new Date();
alert(x instanceof Date); // alerts true
alert(x instanceof Object); // also returns true.
```

## prototype

This paradigm makes use of an object’s prototype property, which is considered to be the prototype upon which new objects of that type are created. Here, an empty constructor is used only to set up the name of the class. Then, all properties and methods are assigned directly to the prototype property.

```js
Function.prototype.method = function(name, func) {
  this.prototype[name] = func;
  return this;
};

function Car() {}
Car.prototype.color = 'red';
Car.prototype.doors = 4;
Car.prototype.mpg = 23;
Car.prototype.showColor = function() {
  alert(this.color);
};
var oCar1 = new Car();
var oCar2 = new Car();

alert(oCar1 instanceof Car); //outputs "true"
```
