// function say(text) {
//     console.log(text);
// };
// say("hello world");

var myArray = [9, 1, 4, 2, 6, 3, 5, 7, 8, 10];

function findMaxValueIndex(array, start) {
    var maxValue = array[start];
    var maxIndex = start;
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
            maxIndex = i;
        }
    }
    return maxIndex;
    //console.log(maxValue);
}

console.log(`index: ${findMaxValueIndex(myArray,0)} - value: ${myArray[findMaxValueIndex(myArray,0)]} `);

function swap(array, left, right) {
    var temp = array[right];
    array[right] = array[left];
    array[left] = temp;
}

// console.log(myArray);
// swap(myArray,0,1);
// console.log(myArray);

function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                swap(array, i, j)
            }
        }
    }
}

selectionSort(myArray);
console.log(myArray);
