# midash API

## Object

### get

Get the attribute of object deeply.

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

Ingore attributes of object and return new object.

::: warning
`_.omit(object, 'a', 'b')` can't work well in midash.
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