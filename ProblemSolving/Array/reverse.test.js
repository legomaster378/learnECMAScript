const reverse = require("./reverse");

test("reverse should work", () => {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  reverse(array);
  //console.log(array);
  
  const expected = [9,8,7,6,5,4,3,2,1];

  expect(array).toEqual(expected);
});
