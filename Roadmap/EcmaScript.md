# ECMA Script

ECMA specification was created to [standardized JavaScript](
http://www.ecma-international.org/publications/standards/Ecma-262.htm).

TypeScript is a super set of ECMAScript which primarily provides optional static typing, classes and interfaces, and provide planned features from future JavaScript editions to current JavaScript engines.

JavaScript frameworks like React and Angular, are coded in TypeScript or most recent version ECMAScript, can be transpiled to older version ECMAScript source code. Eventually, the source code is built into ECMAScript, ES3 or ES5.

Babel transpiles more recent ECMAScript version to older ECMAScript versions.

## Versions

As of 2012, all modern browsers fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3.

On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles.

Babel transpiles ECMAScript 2015+ to ECMAScript 5.1 so all the ECMA 2015+ features work in all modern browsers.

|Version |Official Name |Description|
|--------|--------------|-----------|
|1|ECMAScript 1 (1997)|First Edition.|
|2|ECMAScript 2 (1998)|Editorial changes only.|
|3|ECMAScript 3 (1999)|Added Regular Expressions. Added try/catch.|
|4|ECMAScript 4|Never released.|
|5|ECMAScript 5 (2009)|Added "strict mode". Added JSON support. Added String.trim(). Added Array.isArray(). Added Array Iteration Methods.|
|5.1|ECMAScript 5.1 (2011)|Editorial changes|
|6|ECMAScript 2015|Added let and const. Added default parameter values. Added Array.find(). Added Array.findIndex().|
|7|ECMAScript 2016|Added exponential operator (**). Added Array.prototype.includes.|
|8|ECMAScript 2017|Added string padding. Added new Object properties. Added Async functions. Added Shared Memory.|
|9|ECMAScript 2018|Added rest / spread properties. Added Asynchronous iteration. Added Promise.finally(). Additions to RegExp.|

### ES5

[JavaScript brief history and ECMAScript(ES6,ES7,ES8,ES9) features](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)

[ES5 features](https://www.w3schools.com/js/js_es5.asp)

### ES6 (ECMAScript 2015)

[node es6 support](https://nodejs.org/en/docs/es6/)
[ES6 features](https://www.w3schools.com/js/js_es6.asp)
[es6-features](http://es6-features.org)

[ES6 Compatibility](http://kangax.github.io/compat-table/es6/)
[ES6-boilerplate](https://github.com/metagrover/ES6-boilerplate)

### ES7

### ES8

### ES9

## Language

[Learn JavaScript First_steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

## Module

Modules help to

* organize the codebase physically and logically
  * namespacing, global namespace can be easily polluted
  * separate functionality
  * quickly locate files
* reuseable code
  * module enables thousands of npm packages
* maintainable code  
  * lessen the dependencies
* bundled package
  * specify dependencies
  * increase page load speed

How to use a module

* export
* import
* build and bundle

[basics-of-modular-javascript](https://medium.com/@crohacz_86666/basics-of-modular-javascript-2395c82dd93a)

[Everything I know about writing modular JavaScript applications](https://medium.com/dev-bits/everything-i-know-about-writing-modular-javascript-applications-37c125d8eddf)

[CommonJS vs AMD vs RequireJS vs ES6 Modules](https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b)

[modules eloquent javascript](https://eloquentjavascript.net/10_modules.html)

[Book - Mastering Modular JavaScript](https://www.oreilly.com/library/view/mastering-modular-javascript/9781491955673/)

[mjavascript - Nicolás Bevacqua](https://mjavascript.com/)

### Module Loaders

Module loaders are tools for specifying dependencies for JavaScript files and loading those files into a browser.

Module loaders improve on that by allowing you to define dependencies for your JavaScript files, and assuring that those dependencies are loaded in the correct order so that the variables the code needs are there when referenced.

These dependencies are specified using one of several "module formats".

There are currently 3 primary competing standards for JavaScript modules:

* AMD or Asynchronous Module Definition
* CommonJS
* EcmaScript 6 Modules

#### RequireJS

RequireJS is one of the most popular loaders.

[Moving Past RequireJS](https://benmccormick.org/2015/05/28/moving-past-requirejs)

RequireJS requires developers to use AMD modules. That choice made a ton of sense in 2011 when RequireJS first launched. It makes less sense today. In 2011, the only popular alternative to AMD modules was the CommonJS standard, and AMD held a technical advantage over CommonJS. It was essentially a decision between a technological superiority and a cleaner API. In 2015, AMD is one of 3 realistic module syntax alternatives, and no longer holds a significant technical advantage, but it still has a less clear syntax and has begun to experience problems with network effects.

In 2015, RequireJS is one of 3 major options on the module loading scene, along with Browserify and Webpack. Browserify is an attempt to build a module loader on top of the NPM ecosystem and node modules. It uses CommonJS modules and integrates tightly with NPM. Webpack is an attempt to unify the modules landscape by supporting AMD, CommonJS and ES6 modules. It handles JavaScript, CSS and other assets, as well as preprocessors for each. RequireJS suffers in comparison to both of them, both in terms of features and workflow.

#### SystemJS

SystemJS is a module loader more lightweight, because Angular 2 components are written in TypeScript, and ES6, so you need a loader to import these files.

[SystemJS on github](https://github.com/systemjs/systemjs)

[Modular JavaScript: A Beginners Guide to SystemJS & jspm](https://www.sitepoint.com/modular-javascript-systemjs-jspm/)

### Module Formats (AMD, RequireJS) / (CommonJS, Node) / (ES6 / 2015, SystemJS)

* AMD Format (Asynchronous Module Definition)
  Primarily used for JavaScript modules that need to be included in a browser as opposed to server side JavaScript
* CommonJS Format
  Primarily used in server side implementations as part of NodeJS applications
* ES6 / 2015 format
  ES6 added support for modules. Although ES6 has some cool new features, a lot of these features are not compatible with most modern day web browsers.

AMD modules look like this:

```js
define(['file1','file2'], function(Class1, Class2) {
    let obj = new Class1(),
        obj2 = new Class2();
    return obj.foo(obj2);
});
```

commonJS

```js
let Class1 = require('file1'),
    Class2 = require('file2'),
    obj = newClass1(),
    obj2 = new Class2();

module.exports = obj.foo(obj2);
```

ES6 / 2015

```js
import Class1 from 'file1';
import Class2 from 'file2';

let obj = newClass1(),
    obj2 = new Class2();

export default obj.foo(obj2);
```

With the advent of modules in ES2015, we now don't need to use any third party libraries to create modular JavaScript code. Unfortunately, modern day browsers don’t support ES2015 code quite yet, which means our user’s browsers cannot render the code we write in the newest version of JS. The solution to this has been transpilers.

#### AMD

[Why AMD](https://requirejs.org/docs/whyamd.html)

#### CommonJS

#### ES6+

[JavaScript Modules](https://jsmodules.io/cjs.html)

### Transpiling

Whereas a compiler transforms source code into a form of runnable code such as binary code, a transpiler takes source code in one language and transforms it to its equivalent source code in another language. What a transpiler does, is take ES6+ code and translates it into ES5 code that is supported by modern browsers. This way we can write code in the newest version of JavaScript that will be supported in the future and can still be read by today's applications.

Transpilation is a source code to source code compilation in which the newer versions of JavaScript are used in the user's source code and the transpiler rewrites them so that they are compliant with the current specification.

Usually for apps written in TypeScript or ES6+, transpilers transpile down the source code to ES3 to maintain compatibility with all versions of browsers. The settings to transpiling to a specific version can be configured according to need.

### Polyfill / shims

Polyfills (aka shims) are a pattern for defining equivalent behavior from a newer environment into an older environment, when possible.

Polyfills allow adding extra functionalities into older environment by including another JavaScript file which adds those specific functionalities.

Usually polyfill uses the fallback behavior, if the functions are already imported, you don't want to overwrite the existing ones. Transpiling adds an extra step to the build process and sometimes to avoid that polyfills can be used.

## Troubleshooting

### Error handling

### Debugging

[sourcemaps](https://raygun.com/documentation/product-guides/crash-reporting/sourcemaps/)
[javascript-debugging-made-easy-with-source-maps](https://raygun.com/blog/javascript-debugging-made-easy-with-source-maps/)

## Build and Publish

## Tooling

### Linting

#### ESLint

ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript.

[ESLint](https://eslint.org/)

[ESLint getting started](https://eslint.org/docs/user-guide/getting-started)

[ESLint configuring](https://eslint.org/docs/user-guide/configuring)

### Bundling

#### Browserify

#### WebPack

### Online code editors

* CodePen

  [CodePen](https://codepen.io/) is a social development environment for front-end designers and developers.

* JSFiddle

  Edit JavaScript, CSS, HTML and get live results. Use external resources and collaborate with your team online.

* Plunker

  Plunker is an online community for creating, collaborating on and sharing your web development ideas. Edit your JavaScript, CSS, HTML files and get live results and file structure.

* JSBin

  JS Bin is an open source collaborative web development debugging tool.

* thimble

  [thimble](https://thimble.mozilla.org/en-US/)

  [glitch](https://glitch.com/)

## Resources

[Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[mozilla github](https://github.com/mdn)

[ES6](https://app.pluralsight.com/library/courses/es6-with-typescript/)

[exploring js](http://exploringjs.com/)

[JavaScript Modules](https://jsmodules.io/)