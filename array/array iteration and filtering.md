# array iteration

## for loop index and length

```js
let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  console.log(`${i} -- ${array[i]}`);
}
```

[array.forEach](https://devdocs.io/javascript/global_objects/array/foreach)

```js
// ECMAScript 5
let array = [1, 2, 3];
array.forEach(function(value) {
  console.log(value);
});

array.forEach(function(value, index) {
  console.log(`The item ${index} of array's value is ${value}`);
});

// ECMAScript 6 arrow function
array.forEach(value => console.log(value));

array.forEach((value, index) => {
  console.log(`The item ${index} of array's value is ${value}`);
});
```

## Gotchas

```js
// the following is buggy code
// don't change array while iteration
var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
  console.log(word);
  if (word === 'two') {
    words.shift();
  }
});
console.log(words);
```

## predicate and filter

### array.filter()

The [filter()](https://devdocs.io/javascript/global_objects/array/filter) method creates a new array with all elements that pass the test implemented by the provided function.

```js
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

const result = words.filter(word => word.startsWith('e') || word.endsWith('t'));

console.log(result);

var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
   { name: 'Robin', age: 21 },
  { name: 'Joe', age: 999999 },
  { name: 'Jane', age: 20 }
];

const someone = people.filter( person => person.age>100);

console.log(someone);
```

const add=(a,b) =>{return a+b;}

console.log(add(1,2))
### array.includes

[array.includes](https://devdocs.io/javascript/global_objects/array/includes)

### array.some()

[array.some](https://devdocs.io/javascript/global_objects/array/some)

## How to write iterator

```js
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0,
      cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      }
    };
  }
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000) break;
  console.log(n);
}
```
