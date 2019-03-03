const swap = require("./swap");

/**
 * Shuffles array in place.
 * @param {Array} An array contains the items.
 */
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    swap(array, index, counter);
  }
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// eslint-disable-next-line no-unused-vars
function FisherYatesShuffle(array) {
  let randomIndex;
  // iterate from right to left
  for (let i = array.length - 1; i > 0; i--) {
    // get the random index between 0 and i
    randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i, randomIndex);
  }
}

module.exports = shuffle;

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// shuffle(a);
// console.log(a);
