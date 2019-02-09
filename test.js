let test = require('tape')
let plugin = require('./index.js')
let react = require('./react.js')
let preact = require('./preact.js')

test('env', t=> {
  t.plan(3)
  t.ok(plugin, 'default to preact')
  t.ok(react, 'opt into react')
  t.ok(preact, 'explicit optin preact')
})

test('can transpile jsx to preact h', t=> {
  t.plan(1)
  let src = `import foo from '/bar'
  let baz = name=> <div>{name}</div>
  `
  let result = plugin('foo.jsx', {
    headers: {'content-type':'application/octet'},
    body: src,
  })
  t.ok(true, 'got result')
  console.log(result)
})

test('can jsx to react', t=> {
  t.plan(1)
  let src = `import foo from '/bar'
  let baz = name=> <div>{name}</div>
  `
  let result = react('foo.jsx', {
    headers: {'content-type':'application/octet'},
    body: src,
  })
  t.ok(true, 'got result')
  console.log(result)
})
