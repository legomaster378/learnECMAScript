# jest

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

use jest in VS Code debug

in launch.json

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      //"args": ["-r esm"],
      "runtimeArgs": ["--experimental-modules"],
      //"runtimeArgs": ["-r", "esm"],
      "name": "ES Module Debug in Node",
      "program": "${file}"
    },
    {
      "type": "node",
      "name": "vscode-jest-tests",
      "request": "launch",
      "args": ["--runInBand"],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "program": "${workspaceFolder}/node_modules/jest/bin/jest"
    }
  ]
}
```

## how to use jest

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
