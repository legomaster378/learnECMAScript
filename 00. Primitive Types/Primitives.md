# Primitives

These six types are considered to be primitives. A primitive is not an object and has no methods of its own. All primitives are immutable.

- Boolean — true or false
- Number — integers, floats, etc
- String — an array of characters i.e words
- Symbol — a unique value that's not equal to any other value
- Null — no value
- Undefined — a declared variable but hasn’t been given a value

Everything else is an Object type.

- Object
- Array
- Function
- Boolean
- Symbol
- Error
- Number
- String
- RegExp
- Math
- Set

## typeof

```js
console.log(typeof true);
console.log(typeof false);

console.log(typeof null); //object
console.log(typeof undefined);
```

Why is Null an Object?

Basically, this is a bug that isn't fixed because it would break existing code. This bug has been around since the first version of JavaScript.

## More readings

<https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b>
