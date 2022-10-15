# midash API

## Object

### get
### omit
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