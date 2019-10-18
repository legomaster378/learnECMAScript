# Advanced

## class expression

```js
const createClass = function(...fields) {
  return class {
    constructor(...values) {
      fields.forEach((field, index) => this[field] = values[index]);
    }
  };
};

const Book = createClass('title', 'subtitle', 'pages');
const Actor = createClass('firstName', 'lastName', 'yearStarted');

const fisher = new Actor('Carrie', 'Fisher', 1969);
console.log(fisher);

```

```js
const Movie = class Show {
  constructor() {
    console.log('creating instance...');
    console.log(Show);
  }
};

console.log('Movie is the class name');
console.log(Movie);
const classic = new Movie('Gone with the Wind');

try {
  console.log('however...');
  console.log(Show);
} catch(ex) {
  console.log(ex.message);
}
```

## inherit from functions

```js
function LegacyClass(value) {
  this.value = value;
}

class NewClass extends LegacyClass {}

console.log(new NewClass(1));
```
