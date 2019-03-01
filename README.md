# Learn ECMAScript

## Tools

Visual Studio Code extensions

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

## jest

`npm install --save-dev jest`

run

`npx jest --init` to create the jest.config.js file

`npx jest` to run all the tests

or in package.json

```js
{
    "scripts": {
        "test": "jest"
  },
}
```

`npm run test`

use babel with jest

`npm install --save-dev babel-jest @babel/core @babel/preset-env`

```js
test('test description', () => {
  const expected = '...';
  let exact = '...';
  expect(exact).toBe(expected);
});
```

### matchers

[matchers](https://jestjs.io/docs/en/using-matchers)

- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false

- toBe - uses Object.is to test exact equality.
- toEqual - check the value of an exact object to expected, recursively checks every field of an object or array

[Testing Asynchronous Code](https://jestjs.io/docs/en/asynchronous)

[Setup and Teardown](https://jestjs.io/docs/en/setup-teardown)
