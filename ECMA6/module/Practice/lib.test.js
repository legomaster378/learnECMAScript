import { square, diag } from "./lib";

test("lib should work", () => {
  
  expect(square(1)).toEqual(1);
  expect(diag(4, 3)).toEqual(5);
  
});
