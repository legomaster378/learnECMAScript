# random

<https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131>

## What can random do

- reshuffle
- populate data
- pick a sample
- probe and trial

Get the random number.

```js
Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
Math.floor(Math.random() * 11); // returns a random integer from 0 to 10
Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10

// returns a random number between min (included) and max (excluded):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// returns a random number between min and max (both included):
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## random and array

## random in nodejs

<https://blog.abelotech.com/posts/generate-random-values-nodejs-javascript/>

<https://www.npmjs.com/package/random>
