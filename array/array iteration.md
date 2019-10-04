# array iteration

iteration with for loop

```js
let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  console.log(`${i} -- ${array[i]}`);
}
```

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
```
