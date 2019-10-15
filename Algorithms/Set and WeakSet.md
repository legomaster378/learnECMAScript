# Set and WeakSet

```js
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
const names = new Set(['Jack', 'Jill', 'Jake', 'Jack', 'Sara']);
  
console.log(names.size);

names.add('Mike');

names.add('Kate')
  .add('Kara');

console.log(names.has('Brad'));

console.log(names.entries());
console.log(names.keys());
console.log(names.values());

for(const name of names) {
  console.log(name);
}

names.forEach(name => console.log(name));

[...names].filter(name => name.startsWith('J'))
  .map(name => name.toUpperCase())
  .forEach(name => console.log(name));

const another = new Set();
console.log(
  another.add('a')
    .add(1));
```
