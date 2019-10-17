# boolean

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean>

## decision making in flow

## and (&&) or (||)

true && true => true
true || true => true
true && false => false
true || false => false

## if and expression

expression here is a predicate which yields a boolean value.

if (predicate){//do somehting}

In JavaScript, value itself can be inside if statement.

Any number as long as the value is not 0 yields true.

```js

if (1) {
  console.log('if (1) is true');
} //true
if (2) {
  console.log('if (2) is true');
} // true
if (0) {
  console.log('if (0) is true');
} else {
  console.log('if (0) is not true');
} // not true
if (-1) {
  console.log('if (-1) is true');
} //
if (0.0) {
  console.log('if (0.0) is true');
} else {
  console.log('if (0.0) is not true');
}
if (0.001) {
  console.log('if (0.001) is true');
} // true

//the following yields false
if (''); // An empty string
if (0); // the number 0
if (null); // a value of null
if (false);
if (undefined); // a value of undefined
if (NaN); // a value of NaN
```

## ! operator

## !! operator
