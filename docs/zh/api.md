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
### sample
### sampleSize

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
### groupBy
### keyBy
### get

## String

### camelCase
### snakeCase
### kebabCase

## String

### random

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

## Math

### sum

### max

获取数字数组中最大的值。如果数组为空或者不存在，则返回 `undefined`。

``` js
import { max } from 'midash'

// => 5
max([-5, -3, 0, 3, 5])
```

### min

获取数字数组中最小的值。如果数组为空或者不存在，则返回 `undefined`。

``` js
import { min } from 'midash'

// => -5
min([-5, -3, 0, 3, 5])
```