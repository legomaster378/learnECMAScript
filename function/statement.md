# Statements

## var, let, const and block

[Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be [labelled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label).

var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.

Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be redeclared.

```js
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}
```

[const on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

[strict mode](https://devdocs.io/javascript/strict_mode)

block statement

labled blocks