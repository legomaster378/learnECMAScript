# null and undefined in JavaScript

Semantically, null and undefined are considered to have different meanings.

- undefined is the value assigned when a variable is declared and not initialized,
- null is the value used to represent an object that doesn’t exist.

JavaScript never sets a value to null, only by programmers.

## undefined

```js
var test;
//undefined
console.log(test.a);
//Uncaught TypeError: Cannot read property 'a' of undefined(…)
test.a = 1;
//Uncaught TypeError: Cannot set property 'a' of undefined(…)

var oTemp;
console.log(oTemp == null); //true
console.log(oTemp === null); //false
console.log(oTemp == undefined); //true
console.log(oTemp === undefined); //true
```

```js
!undefined; //true
!null; //true
undefined + null; //NaN
undefined + undefined; //NaN
null + null; //0
null + 1; //1
undefined + 1; //NaN
```

## null

```js
typeof undefined; //"undefined"
typeof null; //"object"

console.log(null == undefined); //outputs "true"
console.log(null === undefined); //outputs "false"

var oTemp = null;
console.log(oTemp == null); //true
console.log(oTemp === null); //true
console.log(oTemp == undefined); //true
console.log(oTemp === undefined); //false
```

Why is Null an Object?

Basically, this is a bug that isn't fixed because it would break existing code. This bug has been around since the first version of JavaScript.
