const swap = require("./swap");

/**
 * Reverse an array
 * @param {Array} array
 * @param {number} start index
 * @param {number} end index
 */
function reverse(array) {
  // from 0 to array.length-1
  for (let i = 0; i < array.length / 2; i++) {
    swap(array, i, array.length - (i + 1));
  }
  // let i = 0;
  // let j = array.length - 1;
  // while (i < j) {
  //   swap(array, i, j);
  //   i++;
  //   j--;
  // }

  // swap the top and bottoms
}

module.exports = reverse;
