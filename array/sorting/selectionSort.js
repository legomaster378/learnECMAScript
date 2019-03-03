import { swap } from "../swap";

function selectionSort(array) {
  // start from each item from 0 to second last
  for (let i = 0; i < array.length - 1; i++) {
    // if any item in the right is smaller , then swap
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        swap(array, i, j);
      }
    }
    // increment
  }
}

// make less swap calls
// eslint-disable-next-line no-unused-vars
function selectionSort2(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex);
    }
  }
}

module.exports = selectionSort;
