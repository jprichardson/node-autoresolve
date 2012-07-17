Node.js - autoresolve
=====================

This autoresolves package locations for you. This prevents such ugliness as:

```js
var mypackage = require('../../../lib/models/customer');
var another = require(path.join(__dirname, 'lib/models/customer'));
var somepack = require(path.join(process.cwd(), 'lib/models/customer'));
```

Installation
------------

    npm install autoresolve



Example
-------

`autoresolve` simply looks for your `package.json` file and considers that its base directory. If it can't find `package.json`, it then uses `process.cwd()`.


```javascript
var P = require('autoresolve');
var customer = require(P('lib/models/customer'));
```


License
-------

Licensed under MIT. See `LICENSE` for more details.

Copyright (c) 2012 JP Richardson