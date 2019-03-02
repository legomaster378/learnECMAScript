const swap = require('./swap');

test('swap array should work', () => {
  let array = [2, 1, 3];

  const expected = [1, 2, 3];

  expect(array).not.toEqual(expected);

  swap(array, 0, 1);

  expect(array).toEqual(expected);
});
