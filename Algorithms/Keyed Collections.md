# Keyed collections

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections

## Map and WeakMap

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

Set and WeakSet

```js
// Sets
var s = new Set();
s.add('hello')
  .add('goodbye')
  .add('hello');
s.size === 2;
s.has('hello') === true;

// Weak Sets
var ws = new WeakSet();
ws.add({ data: 42 });
// Because the added object has no other references, it will not be held in the set
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
