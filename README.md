# Midash

[![Npm Version](https://badgen.net/npm/v/midash)](https://npmjs.com/package/midash)
![Node Version](https://badgen.net/npm/node/midash)
![Type Support](https://badgen.net/npm/types/midash)
![Tree Shaking Support](https://badgen.net/bundlephobia/tree-shaking/midash)
![Npm Month Downloads](https://badgen.net/npm/dw/midash)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/midash/dist/index.esm.js?compression=gzip)](https://unpkg.com/midash/dist/index.esm.js)

An alternative to `lodash` with the same API, plus additional async utilities.

+ 🔨 High frequency API
+ 🕒 Familiar lodash API
+ 💪 Support Tree Shaking
+ 👫 Support Typescript
+ 🔥 Smaller Size (with ES6+ API)
+ 📦 2.5kb mini library
+ 🚀 Additional async utilities

## API

[Documentation](https://midash.devtool.tech/) [中文文档](https://midash.devtool.tech/zh/api.html)

## Installation

``` bash
# yarn
$ yarn add midash
# pnpm
$ pnpm i midash
```

## Usage

``` js
import { sum } from 'midash'

sum([1, 3, 5, 7, 9])
```

## Async Utilities

Midash provides several async utilities:

- `sleep(ms)`: Pause execution for a specified number of milliseconds.
- `retry(fn, options)`: Retry a function multiple times with customizable options.
- `map(iterable, mapper, options)`: Asynchronously map over an iterable with concurrency control.
- `filter(iterable, filterer, options)`: Asynchronously filter an iterable with concurrency control.

Example usage:

```js
import { sleep, retry, map, filter } from 'midash'

// Sleep for 1 second
await sleep(1000)

// Retry a function up to 3 times
const result = await retry(async () => {
  // Your async operation here
}, { times: 3 })

// Asynchronously map over an array with a concurrency of 2
const mappedResults = await map([1, 2, 3, 4], async (num) => {
  await sleep(100)
  return num * 2
}, { concurrency: 2 })

// Asynchronously filter an array
const filteredResults = await filter([1, 2, 3, 4, 5], async (num) => {
  await sleep(100)
  return num % 2 === 0
})
```

These async utilities make Midash a powerful choice for both synchronous and asynchronous operations in modern JavaScript applications.