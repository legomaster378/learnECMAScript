// https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm

const swap = require("../swap");

function selectionSort(array) {
  // start from each item from 0 to second last
  for (var i = 0; i < array.length - 1; i++) {
    // if any item in the right is smaller , then swap
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        swap(array, i, j);
      }
    }
    // increment
  }
}

// make less swap calls
function selectionSort2(array) {
  for (var i = 0; i < array.length - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < array.length; j++) {
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
