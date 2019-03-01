const bubbleSort = require('./bubbleSort');

test('bubbleSort should work', () => {
    let array = [2, 1, 3];
  
    bubbleSort(array);
  
    const expected = [1, 2, 3];
  
    expect(array).toEqual(expected);
  });
  