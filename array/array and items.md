# Array and items

Array's items can be created from scratch, copied from another array, mapped from another array, destructed from the function return.

## create an array

```js
let array = [1, 2, 3];
console.log(array);
```

## Add new items

### add item to the end

```js
let array = [1, 2, 3];
array.push(10);
console.log(array);
```

### add item to the top

```js
let array = [1, 2, 3];
array.unshift(10);
console.log(array);
```

### concat

## remove existing items

### remove the first item

```js
let array = [1, 2, 3, 4];
let a = array.shift();
console.log(a);
console.log(array);
```

### remove the last item

```js
let array = [1, 2, 3, 4];
let a = array.pop();
console.log(a);
console.log(array);
```

### splice to remove items

## change items

### inline change or mutate

### splice to change items

## copy items

slice returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

```js
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-1));
//["elephant"]

console.log(animals.slice(-3));
//["camel", "duck", "elephant"]

console.log(animals.slice(-3, -1));
//["camel", "duck"]
```

// splice is very flexible, can do concat, remove, replace

// splice(startIndex, 1); // delete one specified item
// |
// \ /
// count removed
// problem solving

// push and pop => stack
// unshift and shift => queue

```

```
