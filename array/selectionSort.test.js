const selectionSort = require('./selectionSort');

test('selectionSort should work', () => {
  let array = [2, 1, 3];

  selectionSort(array);

  const expected = [1, 2, 3];

  expect(array).toEqual(expected);
});
