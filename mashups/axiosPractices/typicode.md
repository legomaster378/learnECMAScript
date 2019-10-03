# typicode

<https://jsonplaceholder.typicode.com/guide.html>

```js
const axios = require('axios');
const https = require('https');

async function makePostRequest() {
  https.globalAgent.options.rejectUnauthorized = false;
  const data = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  };
  let res = await axios.post(
    'https://jsonplaceholder.typicode.com/posts',
    data
  );

  console.log(res);
  // console.log(`Status code: ${res.status}`);
  // console.log(`Status text: ${res.statusText}`);
  // console.log(`Request method: ${res.request.method}`);
  // console.log(`Path: ${res.request.path}`);

  // console.log(`Date: ${res.headers.date}`);
  //console.log(`Data: ${res.data}`);
}

makePostRequest();
```

<https://github.com/typicode/json-server>
