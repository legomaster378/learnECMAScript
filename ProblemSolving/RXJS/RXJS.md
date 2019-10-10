# RXJS

<https://www.learnrxjs.io/operators/combination/combineall.html>

```js
const { of } = require('rxjs');
const { map } = require('rxjs/operators');

map(x => x * x)(of(1, 2, 3)).subscribe(v => console.log(`value: ${v}`));
```

<https://medium.com/codingthesmartway-com-blog/getting-started-with-rxjs-part-1-setting-up-the-development-environment-creating-observables-db76ce053725>
