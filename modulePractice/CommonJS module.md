# CommonJS module

The npm ecosystem is built upon this CommonJS format.

In the Node.js module system, each file is treated as a separate module. For example, the module circle.js

```js
const { PI } = Math;
exports.area = r => PI * r ** 2;
exports.circumference = r => 2 * PI * r;
```

The module circle.js has exported the functions area() and circumference(). Functions and objects are added to the root of a module by specifying additional properties on the special exports object. Variables local to the module will be private, because the module is wrapped in a function by Node.js. In the above example, the variable PI is private to circle.js.

Later on require is to import the module.

```js
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

A JavaScript file is a module when it exports one or more of the symbols it defines, being them variables, functions, objects:

```js
exports.uppercase = str => str.toUpperCase();

// to use it
const uppercaseModule = require('uppercase.js');
uppercaseModule.uppercase('test');

exports.a = 1;
exports.b = 2;
exports.c = 3;

const { a, b, c } = require('./uppercase.js');

// or just one value
//file.js
module.exports = value;
const value = require('./file.js');
```

## module.exports

The module.exports property can be assigned a new value (such as a function or object).

square.js

```js
// Assigning to exports will not modify module, must use module.exports
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
```

To use the square.js,

```js
const Square = require('./square.js');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);
```

### how exports works

```js
// add.js
function add(a, b) {
  return a + b;
}

module.exports = add;

//Under the hood, add.js is wrapped by Node.js this way:
(function(exports, require, module, __filename, __dirname) {
  function add(a, b) {
    return a + b;
  }

  module.exports = add;
});
```

## require()

high-level algorithm in pseudo-code of what require() does:

```text
require(X) from module at path Y
1. If X is a core module,
   a. return the core module
   b. STOP
2. If X begins with '/'
   a. set Y to be the filesystem root
3. If X begins with './' or '/' or '../'
   a. LOAD_AS_FILE(Y + X)
   b. LOAD_AS_DIRECTORY(Y + X)
4. LOAD_NODE_MODULES(X, dirname(Y))
5. THROW "not found"

LOAD_AS_FILE(X)
1. If X is a file, load X as JavaScript text.  STOP
2. If X.js is a file, load X.js as JavaScript text.  STOP
3. If X.json is a file, parse X.json to a JavaScript Object.  STOP
4. If X.node is a file, load X.node as binary addon.  STOP

LOAD_INDEX(X)
1. If X/index.js is a file, load X/index.js as JavaScript text.  STOP
2. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP
3. If X/index.node is a file, load X/index.node as binary addon.  STOP

LOAD_AS_DIRECTORY(X)
1. If X/package.json is a file,
   a. Parse X/package.json, and look for "main" field.
   b. If "main" is a falsy value, GOTO 2.
   c. let M = X + (json main field)
   d. LOAD_AS_FILE(M)
   e. LOAD_INDEX(M)
   f. LOAD_INDEX(X) DEPRECATED
   g. THROW "not found"
2. LOAD_INDEX(X)

LOAD_NODE_MODULES(X, START)
1. let DIRS = NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
   a. LOAD_AS_FILE(DIR/X)
   b. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = [GLOBAL_FOLDERS]
4. while I >= 0,
   a. if PARTS[I] = "node_modules" CONTINUE
   b. DIR = path join(PARTS[0 .. I] + "node_modules")
   c. DIRS = DIRS + DIR
   d. let I = I - 1
5. return DIRS
```

## Common issues

### cyclic module dependencies

## Resources

[Modules on nodejs.org](https://nodejs.org/docs/latest/api/modules.html)

### Articles

[Node.js, TC-39, and Modules](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e#.z1plueqbn)
