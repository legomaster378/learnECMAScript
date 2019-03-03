const assert = require("assert");

/**
 * find the max value in the array
 * @param {Array} array
 * @param {number} start
 * @param {number} end
 */
function findMax(array, start, end) {
  assert.ok(start >= 0 && start < array.length, "start should be in the range");
  assert.ok(end >= start && end < array.length, "end should be in the range");
  const maxValue = array[start];
  let maxValueIndex = start;

  for (let i = 1; i <= end; i += 1) {
    if (array[i] > maxValue) {
      maxValueIndex = i;
    }
  }
  return maxValueIndex;
}

module.exports = findMax;

// const test = [1, 2, 3];
// console.log(findMax(test, 0, 2));
