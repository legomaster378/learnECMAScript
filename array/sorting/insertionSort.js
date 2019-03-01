// https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
// https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    var j = i;
    /* check whether the adjacent element in left side is greater or
            less than the current element. */

    while (j > 0 && current < array[j - 1]) {
      // moving the left side element to one position forward.
      array[j] = array[j - 1];
      j = j - 1;
    }
    // moving current element to its  correct position.
    array[j] = current;
  }
}

module.exports = insertionSort;
