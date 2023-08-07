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

### assign
Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

``` js
// => { a: 1, b: 3, c: 5, d: 6 }
_.assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 })
```

### mapKeys

``` js
//=> { a3: 3, b4: 4 }
mapKeys({ a: 3, b: 4 }, (v, k) => `${k}${v}`)
```

### mapValues

``` js
//=> { a: 4, b: 5 }
mapValues({ a: 3, b: 4 }, (v) => v + 1)
```

## Array

### chunk

Get an array of elements split into chunk by size.

``` js
//=> [[0, 1, 2], [3, 4, 5]]
_.chunk([0, 1, 2, 3, 4, 5], 3)

//=> [[0], [1], [2]]
_.chunk([0, 1, 2])

//=> [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
_.chunk('abcdefghi', 3)
```

### sample

Get a random element from an array.

``` js
// get a random element from [0, 3, 6, 10]
_.sample([0, 3, 6, 10])

//=> undefined
_.sample([])
```

### sampleSize

Get `n` random element from an array.

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

``` js
const list = [
  { id: 1, name: 'hello' },
  { id: 2, name: 'world' },
]

//=> { '1': { id: 1, name: 'hello' }, '2', { id: 2, name: 'world' } }
_.keyBy(list, x => id)
```

### groupBy

``` js
//=> { '3': ['one', 'two'], '5': ['three'] }
_.groupBy(['one', 'two', 'three'], x => x.length)
```

### get

### zip
Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
```  js
// => [[1, 'a', true],[2, 'b', false],[3, 'c', undefined]];
_.zip([1, 2, 3], ['a', 'b', 'c'], [true, false]);

// => [[undefined, 1], [undefined, 2], [undefined, 3]];
_.zip([],[1, 2, 3])

// => [[1, 'a', undefined], [2, 'b', undefined],[undefined, 'c', undefined]];
_.zip([1, 2], ['a', 'b', 'c'], [])
```
### unzip
This method is like _.zip except that it accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.

``` js
// => [[1, 2, 3], ['a', 'b', 'c'], [true, false, true]]
_.unzip([[1, 'a', true], [2, 'b', false], [3, 'c', true]])

// => []
_.unzip([])

// => [[1, 2, 4], ['a', 'b', 'c'], [undefined, 3, undefined]]
_.unzip([[1, 'a'], [2, 'b', 3], [4, 'c']])
```

## String

### camelCase
### snakeCase
### kebabCase

## String

## Number

### random

Get the random integer.

``` js
// an integer between 10 and 20, includes 10 and 20
_.random(10, 20)

// an integer between 0 and 20
_.random(20)

// an integer between 0 and 1
_.random()
```

## Lang
### castArray
Casts value as an array if it's not one.
``` js
_.castArray(1);
// => [1]
 
_.castArray({ 'a': 1 });
// => [{ 'a': 1 }]
 
_.castArray('abc');
// => ['abc']
 
_.castArray(null);
// => [null]
 
_.castArray(undefined);
// => [undefined]
 
_.castArray();
// => []
 
const array = [1, 2, 3];
console.log(_.castArray(array) === array);
// => true

```
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

从右至左执行函数，并将上一个函数的返回值作为下一个函数的参数。

`flowRight` is an alias to `compose`.

``` js
const double = x => x * 2
const square = x => x * x

//=> 200
_.compose(double, square)(10)
_.flowRight(double, square)(10)
```

### property

Creates a function that returns the value at path of a given object.
``` js
const objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];
// => [2, 1]
_.map(objects, _.property('a.b'));

// => [1, 2]
_.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');

```

### once

只会调用一次的函数。

``` js
// `initialize` 只能调用 `createApplication` 一次。
const initialize = _.once(createApplication);
initialize();
initialize();
```

### memoize

创建一个会缓存 func 结果的函数。

``` js
const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };

// => [1, 2]
const values = memoize(Object.values,);
values(object);

// => [3, 4]
values(other);

object.a = 2;
// => [1, 2]
values(object);
```

### range

Get the range of numbers.

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

Get the maximum value from an array. If array is empty or falsy, `undefined` is returned.

In `midash`，`maxBy` is an alias to `max`.

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

Get the minimum value from an array. If array is empty or falsy, `undefined` is returned.

:::  tip
In `midash`，`minBy` is an alias to `min`.
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