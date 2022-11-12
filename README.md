<h1 align="left">jted</h1>

[![npm version][npm-src]][npm-href]
[![types][types-src]][types-href]
[![size][size-src]][size-href]
[![coverage][coverage-src]][coverage-href]
[![vulnerabilities][vulnerabilities-src]][vulnerabilities-href]
[![dependencies][dep-src]][dep-href]
[![devDependencies][devDep-src]][devDep-href]
[![License][license-src]][license-href]

> just JWT en-/decoding

## Installation
```bash
$ npm i jted
```

## Usage
```js

import {encode} from 'jted';

const payload = {
    foo: 'bar';
    user: 'John Doe',
    role: 'moderator'
};

const key = 'change me to a very secure key';

// create token with payload and key
const token = encode(payload, key);
```

## API
- <a href="#encode"><code>encode</b></code></a>
- <a href="#decode"><code>decode</code></a>
- <a href="#verify"><code>verify</code></a>

<a name="encode"></a>
#### `encode(payload: Payload, key: string, algorithm: Algorithm = 'sha512', options?: Options): string`
Create a JWT via the payload, key, algorithm and optional options.

***

<a name="decode"></a>
#### `decode(token: string, key: string, algorithm: Algorithm = null, validate: boolean = true): Payload`
Retrieve the payload by decoding token with key and algorithm.

***

<a name="verify"></a>
#### `verify(input: string, key: string, algorithm: Algorithm, signature: string): boolean`
Verify if provided token is legit.

***


## Supported algorithms
- sha256
- sha384
- sha512
- RSA-SHA256

## Todo
- check nodejs support for other algorithms

## Licence
Apache-2.0 License, see [LICENSE](./LICENSE)

[npm-src]: https://badgen.net/npm/v/jted
[npm-href]: https://www.npmjs.com/package/jted
[size-src]: https://badgen.net/packagephobia/install/jted
[size-href]: https://packagephobia.com/result?p=jted
[types-src]: https://badgen.net/npm/types/jted
[types-href]: https://www.npmjs.com/package/jted
[coverage-src]: https://coveralls.io/repos/github/sovrin/jted/badge.svg?branch=master
[coverage-href]: https://coveralls.io/github/sovrin/jted?branch=master
[vulnerabilities-src]: https://snyk.io/test/github/sovrin/jted/badge.svg
[vulnerabilities-href]: https://snyk.io/test/github/sovrin/jted
[dep-src]: https://badgen.net/david/dep/sovrin/jted
[dep-href]: https://badgen.net/david/dep/sovrin/jted
[devDep-src]: https://badgen.net/david/dev/sovrin/jted
[devDep-href]: https://badgen.net/david/dev/sovrin/jted
[license-src]: https://badgen.net/github/license/sovrin/jted
[license-href]: LICENSE
