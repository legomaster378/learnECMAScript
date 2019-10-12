# Array problems

[Array Data Structure](https://www.geeksforgeeks.org/array-data-structure/)

<https://yangshun.github.io/tech-interview-handbook/algorithms/array/>

[Python arrays](https://knaidu.gitbooks.io/problem-solving/arrays/)

## Search

Find the max value inside the array, input an array of integers, output is the index of first max value. i.e., for an array [7,4,3,9,1,8,0,2,5,6], should return 4 as a[4]=9

solution: iteration

```js
// for loop
// while & iterator
// array reduce
```

Find the min value inside the array, input an array of integers, output is the index of first min value. i.e., for an array [7,4,3,9,1,8,0,2,5,6], should return 6 as a[6]=0

solution: iteration

```js
// for loop
// while & iterator
// array reduce
```

Find the k-th large value in the array

solution: sort the array, or use the dutch flag

Find the k-th small value in the array

solution: sort the array

### pivot

The pivot is an important idea of an array. Pivot usually does in-place change, it separates the array into two part, left and right. Quick sort or partitioning is based on the pivot.

For example, array starts from 0 to size -1, the index of the pivot p is `0 < p < (size - 1)`.

The benefit of pivot is O(n) operation.

Usually the array can be separated with a predicate, the true on the left of the pivot and the false on the right of the pivot.

If the predicate is not given, pick up an random value from the array, the less on the left, the greater on the right, and return the index of pivot. In this case, it will be more efficient than sorting the whole array which is O(lgn\*n)

### inline operations

Reverse an array, input: [1,2,3,4], output: [4,3,2,1]

Left shift an array, input: [1,2,3,4], output: [2,3,4,1]

Right shift an array, input: [1,2,3,4], output: [4,1,2,3]

Partition an array, aka, [Dutch national flag problem](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)

Reshuffle an array

### new instance operations

Often the case, we don't want to mutate the original array. We can create an new array and copy values.

Get a segment of the original array.

Return a random sample of the array.

Array permutation

Time: O(n \* n!), due to n! permutations.

Array combination

Time: O(n!/(r!\*(n-r)!)).

Array union find

## Sorting

[Sorting algorithm](https://en.wikipedia.org/wiki/Sorting_algorithm)

For typical serial sorting algorithms good behavior is O(n log n), with parallel sort in O(log2 n), and bad behavior is O(n2).

### Nested array

Flatten an array

- matrix

- list

- dictionary / key value pair
