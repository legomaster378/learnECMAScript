# ES Module

Named exports

```js
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

//------ main.js ------

// import named exports only
import { square, diag } from 'lib';

// import the whole module
// import * as lib from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

Default exports (one per module)

```js
//------ myFunc.js ------
export default function() {} // no semicolon!

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();

//------ MyClass.js ------
export default class {} // no semicolon!

//------ main2.js ------
import MyClass from 'MyClass';
const inst = new MyClass();

export default function foo() {} // no semicolon!
export default class Bar {} // no semicolon!
```

## Common issues

[Announcing a new --experimental-modules](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff)

Run it in node and VS Code

`node --experimental-modules main.js`

`npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node`

`node --require @babel/register "d:\Wei\GitHub\learnECMAScript\ECMA6\module\Practice\main.js"`

`node --require @babel/register "d:\Wei\GitHub\learnECMAScript\ECMA6\module\RediscoveringJSModuleExamples\left.mjs`
