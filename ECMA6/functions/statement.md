# Statements

## var, let, const and block

[Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be [labelled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label).

var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.

Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be re-declared.

```js
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}
```

[const on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

[strict mode](https://devdocs.io/javascript/strict_mode)

block statement

[labelled blocks](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)

## loop

[loop statements](https://www.inf.unibz.it/~calvanese/teaching/04-05-ip/lecture-notes/uni06/index.html)

in the statements, we have for loop, while loop, iterators. for loop is used with index, while loop is useful with boolean expression, stack, queue.

### continue and break

The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
