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
在 `midash` 中无法使用 `_.omit(object, 'a', 'b')`。
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
### pick
### pickBy
### defaults
### merge

## Array

### chunk
### sample
### sampleSize
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
### isObject
### isPlainObject
### isTypedArray
### isEqual

## Util

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