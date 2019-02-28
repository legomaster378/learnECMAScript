const swap = require('./swap');

test('swap array should work', () => {
  let array = [2, 1, 3];
  swap(array, 0, 1);

  const expected = [1, 2, 3];

  expect(array).toEqual(expected);
});
