import { swap } from "../swap";
// const swap = require("../swap");

// let the items with greater value move to the right side
function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

module.exports = bubbleSort;
