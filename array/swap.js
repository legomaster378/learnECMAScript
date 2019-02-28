function swap(array, left, right) {
  let temp = array[right];
  array[right] = array[left];
  array[left] = temp;
}

module.exports = swap;
