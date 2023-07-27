# midash API

## Object

### get

获取 `object` 的嵌套属性。

``` js
const object = { a: [{ b: 3 }] }
 
// => 3
_.get(object, 'a[0].b')
 
// => 3
_.get(object, ['a', '0', 'b'])
 
// => 'default'
_.get(object, 'a.b.c', 'default')
```

### omit

忽略 `object` 的某些属性，并返回新的 `object`。

::: warning
在 `midash` 中无法使用 `_.omit(object, 'a', 'b')`，请使用 `_.omit(object, ['a', 'b'])` 替代。
:::

``` js
const object = {
  a: 3,
  b: 4,
  c: 5
}

//=> { c: 5 }
_.omit(object, ['a', 'b'])

```

### omitBy

通过函数忽略 `object` 的某些属性，并返回新的 `object`。

``` js
const object = {
  a: 3,
  b: 4,
  c: 5
}

// 通过 value 进行筛选忽略
//=> { b:4, c: 5 }
_.omitBy(object, value => value === 3)

// 通过 key 进行筛选忽略
//=> { b:4, c: 5 }
_.omitBy(object, (value, key) => key === 'a')
```

### pick

选择 `object` 的某些属性，并返回新的 `object`。

::: warning
在 `midash` 中无法使用 `_.pick(object, 'a', 'b')`，请使用 `_.pick(object, ['a', 'b'])` 替代。
:::

``` js
const object = {
  a: 3,
  b: 4,
  c: undefined
}

//=> { a: 3, b: 4 }
_.pick(object, ['a', 'b'])

//=> {}
_.pick(object, ['z'])

//=> { c: undefined }
_.pick(object, ['c'])
```

### pickBy

通过函数选择 `object` 的某些属性，并返回新的 `object`。

``` js
const object = {
  a: 3,
  b: 4,
}

//=> { a: 3 }
_.pickBy(object, value => value === 3)

//=> { a: 3 }
_.pickBy(object, (value, key) => key === 'a')
```

### defaults

``` js
//=> { mode: 'development', sourcemap: true, devtool: true }
_.defaults({
  mode: 'development',
  sourcemap: true
}, {
  mode: 'production',
  devtool: true
})
```

### clone

浅拷贝对象属性

``` js
const o = { a: { aa: 3 }, b: 4 }

//=> true
_.clone(o).a === o.a
```

### cloneDeep

递归拷贝对象属性

``` js
const o = { a: { aa: 3 }, b: 4 }

//=> false
_.cloneDeep(o).a === o.a
```

### merge

递归合并所有对象的属性至第一参数对象中，并返回新的对象。

``` js
//=> { a: 4, b: 2 }
merge({ a: 1 }, { b: 2 }, { a: 3 }, { a: 4 })
```

## Array

### chunk

对数组按照 `size` 进行分组。

``` js
//=> [[0, 1, 2], [3, 4, 5]]
_.chunk([0, 1, 2, 3, 4, 5], 3)

//=> [[0], [1], [2]]
_.chunk([0, 1, 2])

//=> [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
_.chunk('abcdefghi', 3)
```

### sample

从一个数组中随机获取值。

``` js
// get a random element from [0, 3, 6, 10]
_.sample([0, 3, 6, 10])

//=> undefined
_.sample([])
```

### sampleSize

从一个数组中随机获取 `n` 个值。

``` js
//=> Maybe [1, 2]
_.sampleSize([1, 2, 3], 2)
 
//=> [1, 2, 3]
_.sampleSize([1, 2, 3], 4)
```

### difference/differenceBy

:::  tip
在 `midash` 中，`differenceBy` 是 `difference` 的别名。
:::

``` js
//=> [2, 4]
difference([1, 2, 3, 4], [1, 3, 5])

//=> [{ a: 4 }]
differenceBy([{ a: 3 }, { a: 4 }], [{ a: 3 }], x => x.a)

```

### shuffle

### uniq

### keyBy

根据条件生成键，并对数组转化为对象。

``` js
const list = [
  { id: 1, name: 'hello' },
  { id: 2, name: 'world' },
]

//=> { '1': { id: 1, name: 'hello' }, '2', { id: 2, name: 'world' } }
_.keyBy(list, x => id)
```

### groupBy

根据条件对数组进行分组。

``` js
//=> { '3': ['one', 'two'], '5': ['three'] }
_.groupBy(['one', 'two', 'three'], x => x.length)
```

### get

### compact

过滤掉数组中的假值( `false`、`undefined`、`null`、`''`、`0`), 并返回新数组。

``` js
_.compact([1, 0, 2, false]) // [1, 2]

_.compact({}, undefined, null, 3) // [{}, 3]

_.compact(["a", "b", "c", "", "d"]) // ["a", "b", "c", "d"]

```

## String

### camelCase

### snakeCase

### kebabCase

## String

## Number

### random

获取一个随机整数

``` js
// 10 到 20 之间的一个随机整数，闭区间，包括 10 与 20
_.random(10, 20)

// 0 到 20 之间的一个随机整数
_.random(20)

// 0 到 1 之间的一个随机整数
_.random()
```

## Lang

### isArray

``` js
//=> true
_.isArray([])
```

### isObject

``` js
//=> true
_.isObject({})

//=> true
_.isObject([])

//=> true
_.isObject(x => {})
```

### isPlainObject

``` js
//=> true
_.isPlainObject({})

//=> true
_.isPlainObject(Object.create(null))

//=> false
_.isPlainObject(new Date())
```

### isPromise

``` js
//=> true
_.isPromise(Promise.resolve())
```

### isTypedArray

``` js
//=> true
_.isTypedArray(new Uint8Array([1, 2, 3]))
```

### isEqual

## Util

### compose/flowRight

从右至左执行函数，并将上一个函数的返回值作为下一个函数的参数。`flowRight` 是 `compose` 的别名。

``` js
const double = x => x * 2
const square = x => x * x

//=> 200
_.compose(double, square)(10)
_.flowRight(double, square)(10)
```

### range

获取序列数组。

``` js
//=> [0, 1, 2, 3]
range(4)

//=> [0, -1, -2, -3]
range(-4)

//=> [1, 2, 3, 4]
range(1, 5)

//=> [5, 4, 3, 2]
range(5, 1)

//=> [0, -1, -2, -3]
range(0, -4, -1)
```

## Math

### sum

### max

获取数字数组中最大的值。如果数组为空或者不存在，则返回 `undefined`。

:::  tip
在 `midash` 中，`maxBy` 是 `max` 的别名。
:::

``` js
// => 5
_.max([-5, -3, 0, 3, 5])

// => { a: 4 }
_.maxBy([
  { a: 3 },
  { a: 4 }
], x => x.a)
```

### min

获取数字数组中最小的值。如果数组为空或者不存在，则返回 `undefined`。

:::  tip
在 `midash` 中，`minBy` 是 `min` 的别名。
:::

``` js
// => -5
_.min([-5, -3, 0, 3, 5])

// => { a: 3 }
_.minBy([
  { a: 3 },
  { a: 4 }
], x => x.a)
```
