# matrix

Matrix is a 2d array.

```js
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(matrix);
console.log(matrix[1][2]);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    process.stdout.write(`matrix[${i}][${j}]=${matrix[i][j]}, `);
  }
  process.stdout.write('\n');
}
```
