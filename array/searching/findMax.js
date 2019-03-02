/**
 * find the max value in the array
 * @param {Array} array
 * @param {number} start
 * @param {number} end
 */
function findMax(array, start, end) {
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
