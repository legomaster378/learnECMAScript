let b = 0;

// 10 billion 10,000,000,000
// the following takes around 14.831 secs to iterate through 10 billion items
for (let i = 0; i <= 10000000000; i++) {
  // eslint-disable-next-line no-unused-vars
  b = i;
}

console.log(b);
