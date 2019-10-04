# Array Basics

[array on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[array on devdocs](https://devdocs.io/javascript-array/)

Array's value can be created from scratch, copied from another array, mapped from another array, destructed from the function return.

creation

```js
let array = [1, 2, 3];
console.log(array);
```

iteration with for loop

```js
let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  console.log(`${i} -- ${array[i]}`);
}
```

add item to the end

```js
let array = [1, 2, 3];
array.push(10);
console.log(array);
```

add item to the top

```js
let array = [1, 2, 3];
array.unshift(10);
console.log(array);
```

remove the first item

```js
let array = [1, 2, 3, 4];
let a = array.shift();
console.log(a);
console.log(array);
```

remove the last item

```js
let array = [1, 2, 3, 4];
let a = array.pop();
console.log(a);
console.log(array);
```

## splice to remove and change items

```js
// use forEach
// ECMAScript 5 Version
// array.forEach(
//     function(value, index){
//         console.log(`The item ${index} of array's value is ${value}`);
//     }
// )

// ECMAScript 6 Version
array.forEach((value, index) => {
  console.log(`The item ${index} of array's value is ${value}`);
});

// splice is very flexible, can do concat, remove, replace

// splice(startIndex, 1); // delete one specified item
//                    |
//                   \ /
//               count removed
// problem solving

// push and pop => stack
// unshift and shift => queue
```
