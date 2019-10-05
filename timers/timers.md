# timers

## setTimeout and clearTimeout

[setTimeout on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

[clearTimeout on MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)

```js
setTimeout(() => {
  alert('hello');
}, 2000);
```

## setInterval and clearInterval

[setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

[clearInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

```js
var intervalID = setInterval(() => {
  alert("I know, I'm annoying");
}, 2500);

clearInterval(intervalID);
```
