//https://www.studytonight.com/data-structures/bubble-sort

const swap = require('../swap');

// let the items with greater value move to the right side
function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

module.exports = bubbleSort;