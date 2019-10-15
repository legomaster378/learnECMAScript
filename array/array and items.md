# Array and items

Array's items can be created from scratch, copied from another array, mapped from another array, destructed from the function return.

## create an array

```js
let array = [1, 2, 3];
console.log(`u suck ${array}`);
console.log(array);
```

[fill()](https://devdocs.io/javascript/global_objects/array/fill) fills all the elements of an array from a start index to an end index with a static value.

## search for an item / items

### array.indexOf() and array.lastIndexOf()

Often an index is returned.

[array.indexOf](https://devdocs.io/javascript/global_objects/array/indexof) compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator) and returns the index of first found.

[array.lastIndexOf](https://devdocs.io/javascript/global_objects/array/lastindexof)

### array.filter

[array.filter](https://devdocs.io/javascript/global_objects/array/filter)

### array.find and array.findIndex

[array.find](https://devdocs.io/javascript/global_objects/array/find)

## Add new items

The [push()](<(https://devdocs.io/javascript/global_objects/array/push)>) method adds one or more elements to the end of an array and returns the new length of the array.

The [pop()](https://devdocs.io/javascript/global_objects/array/pop) method removes the last element from an array and returns that element. This method changes the length of the array.

The [shift()](https://devdocs.io/javascript/global_objects/array/shift) method removes the first element from an array and returns that removed element. This method changes the length of the array.

The [unshift()](https://devdocs.io/javascript/global_objects/array/unshift) method adds one or more elements to the beginning of an array and returns the new length of the array.

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

[concat](https://devdocs.io/javascript/global_objects/array/concat) method does not change the existing arrays, but instead returns a new array.

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

var merged = array1.concat(array2);
console.log(merged);
```

## remove existing items

[splice](https://devdocs.io/javascript/global_objects/array/splice) changes the contents of an array by removing existing elements and/or adding new elements.

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

## in-place change items

a.k.a, inline change or mutate

[array.reverse](https://devdocs.io/javascript/global_objects/array/reverse)

### splice to change items

## sort the items inside

[array.sort](https://devdocs.io/javascript/global_objects/array/sort)

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

[copyWithin](https://devdocs.io/javascript/global_objects/array/copywithin) shallow copies part of an array to another location in the same array and returns it, without modifying its size.

// splice is very flexible, can do concat, remove, replace

// splice(startIndex, 1); // delete one specified item
// |
// \ /
// count removed
// problem solving

// push and pop => stack
// unshift and shift => queue

Array.from

The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
<https://devdocs.io/javascript/global_objects/array/from>

Array.of

The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
<https://devdocs.io/javascript/global_objects/array/of>

## conversion

### array.join()

[array.join([separator])](https://devdocs.io/javascript/global_objects/array/join) creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

[array.map](https://devdocs.io/javascript/global_objects/array/map)

## map and flat

### map

The [map()](https://devdocs.io/javascript/global_objects/array/map) method creates a new array with the results of calling a provided function on every element in the calling array.

### array.flat

The [array.flat](https://devdocs.io/javascript/global_objects/array/flat) method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

The [array.flatMap](https://devdocs.io/javascript/global_objects/array/flatmap) method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1, but flatMap is quite often useful and merging both into one method is slightly more efficient.
