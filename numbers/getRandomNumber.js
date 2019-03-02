/**
 * get a random number from 0 to max
 * @param {number} max
 */
function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

module.exports = getRandomNumber;

//console.log(getRandomNumber(6));
