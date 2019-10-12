# promise

<https://devdocs.io/javascript/global_objects/promise>

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

Starting with ECMAScript2015, JavaScript gains support for Promise objects allowing you to control the flow of deferred and asynchronous operations.

A Promise is in one of these states:
• pending: initial state, not fulfilled or rejected.
• fulfilled: successful operation
• rejected: failed operation.
• settled: the Promise is either fulfilled or rejected, but not pending.

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(
          Error(
            "Image didn't load successfully; error code:" + request.statusText
          )
        );
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
```
