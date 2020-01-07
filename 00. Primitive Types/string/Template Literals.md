# Template Literals

<https://devdocs.io/javascript/template_literals>

back ticks and ${variable or expression}

```js
const name1 = 'Jack';
const name2 = 'Jill';

console.log('Hello ' + name1 + ' and ' + name2);

console.log(`Hello ${name1} and ${name2}`);

console.log(`Hello ${name1} and $name2`);

const item = 'coke';
console.log(`The shady man asked, "how's the ${item}?"`);

const price = 1;
console.log(`The price of a { symbol is $${price * 0.01}.`);

console.log(`Shout out greetings: ${'hello'.toUpperCase()}`);
```

It's useful for template message.

```js
const name = 'John Doe';

const message = `Dear ${name},
We're delighted to let you know that you have been included in
our routine spam starting with this one.

  You can thank us later.
`;

console.log(message);
```

Template literals can be nested but don't do that

```js
//const hours = 10;
//const hours = 14;
const hours = 21;

const event = 'meeting';

console.log(
  `The ${event} will happen ${
    hours < 12
      ? 'in the morning'
      : `later in the day, in the ${hours < 20 ? 'evening' : 'night'}`
  }.`
);
```

the proper way to do the above is:

```js
const hours = 14;
const event = 'meeting';

const when = hrs =>
  hrs < 12
    ? 'in the morning'
    : `later in the day, in the ${hrs < 20 ? 'evening' : 'night'}`;

console.log(`The ${event} will happen ${when(hours)}.`);
```

## object literals

```js
const createPerson = function(name, age, sport, sportFn) {
  const person = {
    name: name,
    age: age,
    toString: function() {
      return this.name + ' ' + this.age;
    }
  };

  person['play' + sport] = sportFn;

  return person;
};

const sam = createPerson('Sam', 21, 'Soccer', function() {
  console.log(`${this.name}, kick, don't touch`);
});

console.log(sam.name);
console.log(sam.toString());
sam.playSoccer();
```

rewrite the above

```js
const createPerson = function(name, age, sport, sportFn) {
  return {
    name,
    age,
    toString() {
      return `${this.name} ${this.age}`;
    },
    [`play${sport}`]: sportFn
  };
};

const sam = createPerson('Sam', 21, 'Soccer', function() {
  console.log(`${this.name}, kick, don't touch`);
});

console.log(sam.name);
console.log(sam.toString());
sam.playSoccer();
```

## Tag

```js
const printDetails = function(texts, ...expressions) {
  console.log(texts);
  console.log(expressions);
};

const name = 'John';
printDetails`Hello ${name}, how are you?`;
```

```js
const mask = function(texts, ...expressions) {
  const createMask = text => '*'.repeat(text.length);

  const maskedText = expressions
    .map(
      (expression, index) =>
        `${texts[index]}${createMask(expression.toString())}`
    )
    .join('');

  const closingText = texts[texts.length - 1];

  return `${maskedText}${closingText}`;
};

const agent = 'Bond';
const organization = 'MI6';

console.log(mask`Hi, I'm ${agent}, with ${organization}.`);
```

## Gotchas

Template literals in lambda are evaluated later

```js
let value = 4;

const msg1 = `The value is ${value}`;
const print = () => `The value is ${value}`;

value = 0;

console.log(msg1);
console.log(print());
```

## String.raw

Some special characters need to escaped.

```js
console.log("some special characters: \\ \\n \\b '");

console.log("some special characters:  \n \b '");

console.log(String.raw`some special characters: \ \n \b '`);
```
