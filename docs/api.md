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

Get the maximum value from an array. If array is empty or falsy, `undefined` is returned.

``` js
import { max } from 'midash'

// => 5
max([-5, -3, 0, 3, 5])
```

### min

Get the minimum value from an array. If array is empty or falsy, `undefined` is returned.

``` js
import { min } from 'midash'

// => -5
min([-5, -3, 0, 3, 5])
```