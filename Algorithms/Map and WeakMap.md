# Keyed collections

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections

## Map and WeakMap

<https://devdocs.io/javascript/global_objects/map>

```js
// Maps
var m = new Map();
m.set('hello', 42);
m.set(s, 34);
m.get(s) == 34;

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
wm.size === undefined;
```

```js
const scores = new Map([['Sara', 12], ['Bob', 11], ['Jill', 15], ['Bruce', 14]]);

scores.set('Jake', 14);

console.log(scores.size);

for(const [name, score] of scores.entries()) {
  console.log(`${name} : ${score}`);
}

scores.forEach((score, name) => console.log(`${name} : ${score}`));

scores.forEach(score => console.log(score));

console.log(scores.has('Jane'));
console.log(scores.has('Jill'));

const another = new Map();
another.set(1, 2);
console.log(another);

```

```js
// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

console.log(mapped);

// container for the resulting order
var result = mapped.map(function(el){
  return list[el.index];
});

console.log(result);
```
