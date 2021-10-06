⚠️ *This repository has been archived. Use [@proxy](https://arc.codes/docs/en/reference/app.arc/proxy) or [asap](https://arc.codes/docs/en/reference/runtime/node.js#%40architect%2Fasap) for proxying in Architect. This plugin is not compatible with the [plugins](https://arc.codes/docs/en/guides/extend/plugins) API for Architect. For an updated list other examples refer to [arc.codes/examples](https://arc.codes/examples).*

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
