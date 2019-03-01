var myArray = [9, 1, 4, 10, 2, 6, 3, 5, 7, 8, 10];

/**
 * find the max value in the array
 * @param {Array} array
 * @param {number} start
 * @param {number} end
 */
function findMax(array, start, end) {
  start = start || 0;
  end = end || array.length - 1;
  var maxValue = array[start];
  var maxValueIndex = start;

  for (var i = 1; i <= end; i++) {
    if (array[i] > maxValue) {
      maxValueIndex = i;
    }
  }
  return maxValueIndex;
}

console.log(
  `index: ${findMax(myArray)} - value: ${myArray[findMax(myArray)]} `
);
