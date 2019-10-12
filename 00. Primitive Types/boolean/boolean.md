# boolean

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean>

## if and expression

```js
//the following yields true
if (1) {
  console.log('if (1) is true');
} //true
if (2) {
  console.log('if (2) is true');
} // true
if (0) {
  console.log('if (0) is true');
} // which is not true
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