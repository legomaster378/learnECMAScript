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

## iterator

```js
const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];

// old way with for loop
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// new way with for of and iterator
for (const key of names.keys()) {
  console.log(key);
}

for (const name of names.values()) {
  console.log(name);
}

for (const entry of names.entries()) {
  console.log(entry);
}


## array.entries(), array.keys() and array.values()

[array.entries()](https://devdocs.io/javascript/global_objects/array/entries)

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

```js
var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value); // [0, "a"]
console.log(iterator1.next().value); // [1, "b"]
console.log(iterator1.next().value); //  [2, "c"]
console.log(iterator1.next().value); // undefined
```

for ... of loop

```js
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
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

## Generators

[Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) simplify iterator-authoring using function* and yield. A function declared as function* returns a Generator instance. Generators are subtypes of iterators which include additional next and throw. These enable values to flow back into the generator, so yield is an expression form which returns a value (or throws).

```js
var fibonacci = {
  [Symbol.iterator]: function*() {
    var pre = 0,
      cur = 1;
    for (;;) {
      var temp = pre;
      pre = cur;
      cur += temp;
      yield cur;
    }
  }
};

for (var n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000) break;
  console.log(n);
}
```
