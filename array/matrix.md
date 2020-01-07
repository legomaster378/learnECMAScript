# matrix

Matrix is a 2d array.

Usually 

```js
// an empty 2d array:
let emptyArray = [[]];

let myArray =
[
  [ 0, 1, 2, 3 ],
  [ 4, 5, 6, 7 ],
  [ 8, 9, 10, 11 ],
  [ 12, 13, 14, 15 ]
]
console.log(myArray);

let myRotatedArray =
[
  [ 0, 4, 8, 12 ],
  [ 1, 5, 9, 13 ],
  [ 2, 6, 10, 14 ],
  [ 3, 7, 11, 15 ]
];

console.log(myRotatedArray);
```

To generate a 2d array programmably:

```js
let array = new Array(4);

for (let i = 0; i < 4; i++) {
  array[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    //array[i][j] = '[' + i + ', ' + j + ']';
    array[i][j] = i * array[i].length + j;
  }
}

console.log(array);
// [
//   [ 0, 1, 2, 3 ],
//   [ 4, 5, 6, 7 ],
//   [ 8, 9, 10, 11 ],
//   [ 12, 13, 14, 15 ]
// ]

//if array[i][j] = j * array[i].length + i;
// [
//   [ 0, 4, 8, 12 ],
//   [ 1, 5, 9, 13 ],
//   [ 2, 6, 10, 14 ],
//   [ 3, 7, 11, 15 ]
// ]
```

To get value from a 2d array

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

console.log(matrix); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix[1][2]);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    process.stdout.write(`matrix[${i}][${j}]=${matrix[i][j]}, `);
  }
  process.stdout.write('\n');
}
```
