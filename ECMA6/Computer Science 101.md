# Power of computer

```js
let count = 0;

// 10000000000 = 10 billion (10,000,000,000)
// the following takes around 14.831 secs to iterate through 10 billion items
for (let i = 0; i <= 10000000000; i++) {
  // eslint-disable-next-line no-unused-vars
  count++;
}

console.log(count);
```

```js
// power of computation
for (let i = 0; i < 65; i++) {
  let powerOf2 = 2 ** i;
  console.log(`2 ** ${i} == ${powerOf2}`);
}
```
