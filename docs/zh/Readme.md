---
sidebar: false
---

# midash

与 lodash 拥有相似 API，基于 ES6+，体积更小的工具函数库，附带额外的异步工具函数。

+ 🔨 高频使用 API
+ 🕒 熟悉的 lodash API
+ 💪 支持 Tree Shaking
+ 👫 支持 Typescript
+ 🔥 体积更小 (基于 ES6+)
+ 📦 仅 2.5kb 的迷你库
+ 🚀 提供异步工具函数

## 安装

``` bash
# yarn
$ yarn add midash
# pnpm
$ pnpm i midash
```

``` js
import { sum } from 'midash'

sum([1, 3, 5, 7, 9])
```

## 异步工具函数

midash 提供了几个有用的异步工具函数：

- `sleep(ms)`: 暂停执行指定的毫秒数。
- `retry(fn, options)`: 多次尝试执行函数，直到成功。
- `map(iterable, mapper, options)`: 异步映射可迭代对象，可控制并发数。
- `filter(iterable, filterer, options)`: 异步过滤可迭代对象，可控制并发数。

使用示例：

```js
import { sleep, retry, map, filter } from 'midash'

// 暂停1秒
await sleep(1000)

// 最多尝试3次
const result = await retry(async () => {
  // 你的异步操作
}, { times: 3 })

// 异步映射数组，并发数为2
const mappedResults = await map([1, 2, 3, 4], async (num) => {
  await sleep(100)
  return num * 2
}, { concurrency: 2 })

// 异步过滤数组
const filteredResults = await filter([1, 2, 3, 4, 5], async (num) => {
  await sleep(100)
  return num % 2 === 0
})
```