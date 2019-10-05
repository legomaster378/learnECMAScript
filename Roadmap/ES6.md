# Good practices

- `;`
- `===` vs `==`
- `'use strict';` identifies some potential errors before running the code.
- prefer `let` or `const`, don't use `var`
  - `const` and immutable string and object `const john = Object.freeze({firstName: "John", age: 20})`;

## iterator

```js
const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];

// old way
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// new way
for (const name in names) {
  console.log(name);
}

for (const entry of names.entries()) {
  console.log(entry);
}
//[ 0, 'Sara' ]
//[ 1, 'Jake' ]
//[ 2, 'Pete' ]
//[ 3, 'Mark' ]
//[ 4, 'Jill' ]

// with destructing
for (const [i, name] of names.entries()) {
  console.log(i + '--' + name);
}
```

## symbol

JavaScript previously has 5 primitive types: number, string, boolean, null and undefined. ECMA 6 added symbol primitive type.

## Resources

[Exploring ES6](https://exploringjs.com/es6/index.html#toc_ch_modules)
