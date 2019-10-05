/* eslint-disable no-unused-vars */
const swap = require("../swap");
const bubbleSort = require("./bubbleSort");

test("bubbleSort should work", () => {
  const array = [2, 8, 1, 0, 9, 3, 5, 7, 4, 6];

  bubbleSort(array);

  const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  expect(array).toEqual(expected);
});
