# Reflection

```js
class Counter {}

const counter1 = new Counter();
const counter2 = new Counter();

const counter1Prototype = Reflect.getPrototypeOf(counter1);
const counter2Prototype = Reflect.getPrototypeOf(counter2);

console.log(counter1 === counter2); //false
console.log(counter1Prototype === counter2Prototype); //true
```