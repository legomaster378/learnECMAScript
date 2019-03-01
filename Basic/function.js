// function say(text) {
//     console.log(text);
// };
// say("hello world");

var myArray = [9, 1, 4, 2, 6, 3, 5, 7, 8, 10];

function findMaxValueIndex(array, start) {
  var maxValue = array[start];
  var maxValueIndex = start;
  for (var i = 1; i < array.length; i++) {  
    if (array[i] > maxValue) {
      maxValueIndex = i;
    }
  }
  return maxValueIndex;
}

console.log(
  `index: ${findMaxValueIndex(myArray, 0)} - value: ${
    myArray[findMaxValueIndex(myArray, 0)]
  } `
);
