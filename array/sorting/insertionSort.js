function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    let j = i;
    // check whether the adjacent element in left side is greater or
    // less than the current element.

    while (j > 0 && current < array[j - 1]) {
      // moving the left side element to one position forward.
      array[j] = array[j - 1];
      j -= 1;
    }
    // moving current element to its  correct position.
    array[j] = current;
  }
}

module.exports = insertionSort;
