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
`_.omit(object, 'a', 'b')` can't work well in midash. use `_.omit(object, ['a', 'b'])` instead.
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

Ingore attributes of object by function and return new object.

``` js
const object = {
  a: 3,
  b: 4,
  c: 5
}

// omit by value
//=> { b:4, c: 5 }
_.omitBy(object, value => value === 3)

// omit by key
//=> { b:4, c: 5 }
_.omitBy(object, (value, key) => key === 'a')
```

### pick

Pick attributes of object by function and return new object.

::: warning
`_.pick(object, 'a', 'b')` can't work well in midash, use `_.pick(object, ['a', 'b'])` instead.
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

``` js
const o = { a: { aa: 3 }, b: 4 }

//=> true
_.clone(o).a === o.a
```

### cloneDeep

``` js
const o = { a: { aa: 3 }, b: 4 }

//=> false
_.cloneDeep(o).a === o.a
```

### merge

Merges one or more objects into first object recursively and return new object.

``` js
//=> { a: 4, b: 2 }
merge({ a: 1 }, { b: 2 }, { a: 3 }, { a: 4 })
```

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