# Variables

## scope and block

[Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) is used to group zero or more statements. The block is delimited by a pair of curly brackets and may optionally be [labelled](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label).

In JavaScript, scopes are declared by functions, and not by blocks.

Functions are the only construct can create a new local scope.

The scope of a declaration that is created inside a block is not terminated (as it is in other languages) by the end of the block.

## var

`var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope.

Only functions can have local variable. Every variable outside the function or declared without "var" is in global scope.

Inside function, "var" is required to explicitly create local scope and declare local variables in it. If the function doesn't use "var" to declare the variable, JavaScript will go looking outside the function, in the global scope, to see whether or not that variable already exists. If not, it creates in the global scope

```js
function countAvailable() {
  stock = 5; // no var so the global variable is used
  sales = 3; // after this line, a global variable is created
  return stock - sales;
}

function anotherFunction() {
  console.log(stock, sales);
}
anotherFunction(); //stock is not defined yet so it is error
stock = 0;
available = countAvailable(); //2
console.log(stock); //5
console.log(sales); //3, it will cause error if
//invoked before countAvailable
anotherFunction(); //5, 3
```

So the above function is a very bad practices and introduces in many bugs.

## let

With `var`, variable identifier can conflict different scopes.

Look at the following bad example:

```js
var a = 123;
function oneFunction() {
  alert(a); //undefined now because function detects a name collision so a is regarded as a local variable not its value not assigned yet
  alert(window.a); //123
  var a = 1; //seems nothing wrong but it'd a local variable
  alert(a); //1
  a = 2; //local variable and the global is still 123
  alert(a); //2
}
oneFunction();
console.log(a); //123
```

`let` allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.

Constants are block-scoped, much like variables defined using the let statement. The value of a constant cannot change through reassignment, and it can't be re-declared.

```js
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}
```

[const on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

## variable identifiers

The first character must be:

- a letter,
- an underscore (\_), or
- a dollar sign (\$).

  All remaining characters may be:

- underscores,
- dollar signs, or
- any alphanumeric characters.

## value assignment

For the value assignment, if the type is a kind of primitive type which behaves like a value type, each variable holds its own copy of value. If it is a reference type, all the variables will refer to the same copy of value.

Primitive types are value type and object and `new`ed instance of object are reference type.

```js
var oneNumber = 1;
//or var onenumber = new Number(1);
var another = oneNumber; //when value assigned, another has it's only copy
oneNumber = 2;
console.log(another); //1

// but o is a reference type
var o1 = { number: 1 };
var o2 = o1;
o1.number = 2;
console.log(o2.number); //2, changed

var stooge = { nickname: 'stooge' };
var x = stooge;
x.nickname = 'Curly';
console.log(stooge.nickname); //Curly

// string is immutable
var onestring = 'a';
var another = onestring;
onestring = 'b';
console.log(another); //b
```

### Values and Literals

You use literals to represent values in JavaScript. These are fixed values, not variables

- Array literals
- Boolean literals
- Floating-point literals
- Integers
- Object literals
- RegExp literals
- String literals

### multi-value assignment

````js
var a = 1,
  b = 2; //a is 1 and b is 2

var a,
  b = 1; //a is undefined and b is 1

'''

don't write var a=b=1;


Don't use chain assignment in var because of the right-to-left evaluation implemented in JavaScript.

`var a=b=1;` is interpreted as `var a=(b=1);` `(b=1)` yields 1, so a=1;
```js
var a=b=1;
console.log(a); //1
console.log(b); //1
b=2;
console.log(a); //1
console.log(b); //2

var a = b = c = {};
alert(a==b);//true
var a = {}, b = {}, c = {};
alert(a==b);//false

````

## comparison

`==` and `!=` are value comparison operators

null == undefined true
"NaN" == NaN false
5 == NaN false
NaN == NaN false
NaN != NaN true
false == 0 true
true == 1 true
true == 2 false
undefined == 0 false
null == 0 false
"5" == 5 true
1=="1.0000000000000001" true
1=="1.000000000000001" false

If you want to test to ensure that the values and the types are the same, you use the `===` and `!==`

```js
var sNum = '55';
var iNum = 55;
alert(sNum == iNum); //outputs "true"
alert(sNum === iNum); //outputs "false"

var sNum = '55';
var iNum = 55;
alert(sNum != iNum); //outputs "false"
alert(sNum !== iNum); //outputs "true"

var myData1 = 5;
var myData2 = '5';
var myData3 = myData2;
var test1 = myData1 == myData2; // true
var test2 = myData2 == myData3; // true
var test3 = myData1 === myData2; // false
var test4 = myData2 === myData3; // true
```

JavaScript primitives are compared by value, but JavaScript objects are compared by reference.

```js
var myData1 = {
  name: 'Adam',
  weather: 'sunny'
};
var myData2 = {
  name: 'Adam',
  weather: 'sunny'
};
var myData3 = myData2;

var test1 = myData1 == myData2; // false
var test2 = myData2 == myData3; // true
var test3 = myData1 === myData2; // false
var test4 = myData2 === myData3; // true
```

## `||` value assignment

```js
var myNameSpace = myNameSpace || {};
```
