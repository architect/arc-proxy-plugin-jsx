# @architect/proxy-plugin-jsx

## Install

Ensure the plugin is installed in `src/http/get-index`.

```bash
cd src/http/get-index
npm i @architect/proxy-plugin-jsx
```

## Usage

To transpile `jsx` into `React.createElement` calls:

```javascript
// src/http/get-index/index.js
let arc = require('@architect/functions')

exports.handler = arc.proxy.spa({
  spa:true,
  plugins: {
    jsx: ['@architect/proxy-plugin-jsx/react']
  }
})
```

To transpile `jsx` into `h` calls:

```javascript
// src/http/get-index/index.js
let arc = require('@architect/functions')

exports.handler = arc.proxy.spa({
  spa:true,
  plugins: {
    jsx: ['@architect/proxy-plugin-jsx/preact']
  }
})
```
