# axios

## install

`npm install axios --save-dev`

`<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

<https://github.com/axios/axios>

## get

simple sync way

```js
const axios = require('axios');

axios
  .get('http://aaron.gingerstudio.net')
  .then(resp => {
    console.log(resp.data);
  })
  .catch(error => {
    console.log(error);
  });
```

use async and await

```js
const axios = require('axios');

async function makeGetRequest() {
  let res = await axios.get('http://aaron.gingerstudio.net').catch(error => {
    console.log(error);
  });

  console.log(res.data);
}

makeGetRequest();
```

the promise pattern

```js
const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false
});

const getBreeds = () => {
  try {
    return axios.get('https://dog.ceo/api/breeds/list/all', {
      httpsAgent: agent
    });
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const breeds = getBreeds()
    .then(response => {
      if (response.data.message) {
        console.log(response.data);
        console.log(
          `Got ${Object.entries(response.data.message).length} breeds`
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
};

countBreeds();
```

## post to update

[POST on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)

## put to create

[PUT on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)

## request

## response

schema

```json
{
  // `data` is the response that was provided by the server
  "data": {},

  // `status` is the HTTP status code from the server response
  "status": 200,

  // `statusText` is the HTTP status message from the server response
  "statusText": "OK",

  // `headers` the headers that the server responded with
  // All header names are lower cased
  "headers": {},

  // `config` is the config that was provided to `axios` for the request
  "config": {},

  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  "request": {}
}
```

```js
let response = await axios.head('http://aaron.gingerstudio.net');
```

- response.status
- response.headers

## Promise

```js
const axios = require('axios');
const https = require('https');
https.globalAgent.options.rejectUnauthorized = false;

async function makeRequests() {
  let [u1, u2] = await Promise.all([
    axios.get('https://api.github.com/users/janbodnar'),
    axios.get('https://api.github.com/users/symfony')
  ]);

  console.log(`Jan Bodnar: ${u1.data.created_at}`);
  console.log(`Symfony: ${u2.data.created_at}`);
}

makeRequests();
```

## axios(config)

```js
const axios = require('axios');

async function makeRequest() {
  const config = {
    method: 'get',
    url: 'http://aaron.gingerstudio.net',
    headers: { 'User-Agent': 'VS Code' }
  };

  let res = await axios(config);

  console.log(res.request._header);
}

makeRequest();
```

download image

```js
const axios = require('axios');
const fs = require('fs');

var config = {
  responseType: 'stream'
};

let url = 'https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg';

async function getImage() {
  let resp = await axios.get(url, config);
  resp.data.pipe(fs.createWriteStream('image.jpg'));
}

getImage();
```

## common issues

```js
https.globalAgent.options.rejectUnauthorized = false;
```

## Resources

### Tutorials

<http://zetcode.com/javascript/axios/>

<https://flaviocopes.com/axios/>
