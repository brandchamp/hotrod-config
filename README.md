hotrod-config
=============

Simple convention-based app configuration object based on yaml files, environment variables and
command line args (in that order)
   
## Install

```
npm install hotrod-config
```

## Overview

Uses the [nconf](https://github.com/indexzero/nconf) library reads settings from the following sources, in order.

* `<configDir>/default.yml`
* `<configDir>/local.yml`
* Environment variable
* Command line arg

Later sources take precedence over earlier, so a command line arg will always override a setting of the same name 
found elsewhere.

## Usage

```js
var path = require('path');
var configDir = path.join(__dirname, 'config');

var config = require('hotrod-config')(configDir);

var foo = config.get('foo');
var bar = config.getRequired('bar');  // throws if not present
```

# License

The MIT License (MIT)

Copyright (c) Panoptix CC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
