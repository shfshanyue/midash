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

Ignore attributes of object and return new object.

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

Ignore attributes of object by function and return new object.

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

Pick attributes of object by function and return new object.

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

Assigns own enumerable properties of source objects to the destination object for all destination properties that resolve to undefined.

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

Creates a shallow clone of an object.

``` js
const o = { a: { aa: 3 }, b: 4 }

//=> true
_.clone(o).a === o.a
```

### merge

Merges one or more objects into first object recursively and returns new object.

``` js
//=> { a: 4, b: 2 }
_.merge({ a: 1 }, { b: 2 }, { a: 3 }, { a: 4 })
```

### assign

Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

``` js
// => { a: 1, b: 3, c: 5, d: 6 }
_.assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 })
```

### mapKeys

Transform the keys of an object with a function and returns a new object.

``` js
//=> { a3: 3, b4: 4 }
_.mapKeys({ a: 3, b: 4 }, (v, k) => `${k}${v}`)
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

### shuffle

Creates an array of shuffled values.

``` js
//=> [2, 3, 1] (any random order)
_.shuffle([1, 2, 3])
```

### difference/differenceBy

Creates an array of array values not included in the other given arrays.

::: tip
In `midash`, `differenceBy` is an alias of `difference`.
:::

``` js
//=> [2, 4]
_.difference([1, 2, 3, 4], [1, 3, 5])

//=> [{ a: 4 }]
_.differenceBy([{ a: 3 }, { a: 4 }], [{ a: 3 }], x => x.a)
```

### intersection

Creates an array of unique values that are included in all given arrays.

``` js
//=> [2]
_.intersection([1, 2], [2, 3])

//=> [{ id: 1 }]
_.intersection([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 3 }], item => item.id)
```

### uniq

Creates a duplicate-free version of an array.

``` js
//=> [1, 2, 3]
_.uniq([1, 2, 3, 1, 2])
```

### uniqBy

Creates a duplicate-free version of an array using a function for comparison.

``` js
//=> [{ id: 1 }, { id: 2 }]
_.uniqBy([{ id: 1 }, { id: 2 }, { id: 1 }], item => item.id)
```

### keyBy

Creates an object composed of keys generated from the results of running each element of collection through iteratee.

``` js
const list = [
  { id: 1, name: 'hello' },
  { id: 2, name: 'world' },
]

//=> { '1': { id: 1, name: 'hello' }, '2': { id: 2, name: 'world' } }
_.keyBy(list, x => x.id)
```

### groupBy

Creates an object composed of keys generated from the results of running each element of collection through iteratee. The corresponding value of each key is an array of elements responsible for generating the key.

``` js
//=> { '3': ['one', 'two'], '5': ['three'] }
_.groupBy(['one', 'two', 'three'], x => x.length)
```

### zip

Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.

``` js
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

### compact

Removes all falsey values from an array.

``` js
// => [1, 2, 3]
_.compact([0, 1, false, 2, '', 3])
```

### head

Gets the first element of array.

``` js
// => 1
_.head([1, 2, 3])

// => undefined
_.head([])
```

### nth

Gets the element at index n of array. If n is negative, the nth element from the end is returned.

``` js
// => 2
_.nth([1, 2, 3], 1)

// => 3
_.nth([1, 2, 3], -1)
```

## String

### camelCase

Converts string to camel case.

``` js
// => 'fooBar'
_.camelCase('foo_bar')

// => 'fooBar'
_.camelCase('foo-bar')

// => 'fooBar'
_.camelCase('Foo Bar')
```

### snakeCase

Converts string to snake case.

``` js
// => 'foo_bar'
_.snakeCase('fooBar')

// => 'foo_bar'
_.snakeCase('foo-bar')

// => 'foo_bar'
_.snakeCase('Foo Bar')
```

### kebabCase

Converts string to kebab case.

``` js
// => 'foo-bar'
_.kebabCase('fooBar')

// => 'foo-bar'
_.kebabCase('foo_bar')

// => 'foo-bar'
_.kebabCase('Foo Bar')
```

### words

Splits string into an array of its words.

``` js
// => ['foo', 'bar']
_.words('foo bar')

// => ['foo', 'bar']
_.words('foo-bar', /[^, -]+/g)
```

### template

Creates a compiled template function that can interpolate data properties.

``` js
// => 'Hello Fred!'
_.template('Hello ${name}!')({ name: 'Fred' })
```

## Number

### random

Gets a random integer between min and max (inclusive).

``` js
// an integer between 10 and 20, includes 10 and 20
_.random(10, 20)

// an integer between 0 and 20
_.random(20)

// an integer between 0 and 1
_.random()
```

### range

Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.

``` js
//=> [0, 1, 2, 3]
_.range(4)

//=> [0, -1, -2, -3]
_.range(-4)

//=> [1, 2, 3, 4]
_.range(1, 5)

//=> [5, 4, 3, 2]
_.range(5, 1)

//=> [0, -1, -2, -3]
_.range(0, -4, -1)
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

Checks if value is classified as an Array object.

``` js
//=> true
_.isArray([])

//=> false
_.isArray({})
```

### isBoolean

Checks if value is classified as a boolean primitive.

``` js
//=> true
_.isBoolean(false)

//=> true
_.isBoolean(true)

//=> false
_.isBoolean(null)
```

### isObject

Checks if value is the language type of Object.

``` js
//=> true
_.isObject({})

//=> true
_.isObject([])

//=> true
_.isObject(x => {})

//=> false
_.isObject(null)
```

### isPlainObject

Checks if value is a plain object.

``` js
//=> true
_.isPlainObject({})

//=> true
_.isPlainObject(Object.create(null))

//=> false
_.isPlainObject([])

//=> false
_.isPlainObject(new Date())
```

### isPromise

Checks if value is a Promise.

``` js
//=> true
_.isPromise(Promise.resolve())

//=> false
_.isPromise({})
```

### isPrimitive

Checks if value is primitive.

``` js
//=> true
_.isPrimitive(null)

//=> true
_.isPrimitive(undefined)

//=> true
_.isPrimitive(1)

//=> true
_.isPrimitive('string')

//=> true
_.isPrimitive(true)

//=> true
_.isPrimitive(Symbol())

//=> false
_.isPrimitive({})

//=> false
_.isPrimitive([])
```

### isTypedArray

Checks if value is classified as a typed array.

``` js
//=> true
_.isTypedArray(new Uint8Array([1, 2, 3]))

//=> false
_.isTypedArray([])
```

### isEqual

Performs a deep comparison between two values to determine if they are equivalent.

``` js
//=> true
_.isEqual([1, 2, 3], [1, 2, 3])

//=> false
_.isEqual([1, 2, 3], [1, 2, 4])

//=> true
_.isEqual({ a: 1, b: 2 }, { b: 2, a: 1 })
```

## Function

### compose/flowRight

Composes functions from right to left. The rightmost function can take multiple arguments, the remaining functions must be unary.

::: tip
In `midash`, `flowRight` is an alias of `compose`.
:::

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

Creates a function that is restricted to be called only once. Repeat calls to the function return the value of the first invocation.

``` js
// `initialize` can only call `createApplication` once.
const initialize = _.once(createApplication);
initialize();
initialize(); // No effect
```

### memoize

Creates a function that memoizes the result of func.

``` js
const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };

// => [1, 2]
const values = _.memoize(Object.values);
values(object);

// => [3, 4]
values(other);

object.a = 2;
// => [1, 2] (cached result)
values(object);
```

### debounce

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.

``` js
// Create a debounced function that will only invoke updateChart
// after waiting at least 200ms from the last time it was called
const debouncedUpdate = _.debounce(updateChart, 200);

// Call it multiple times 
window.addEventListener('resize', debouncedUpdate);
```

### throttle

Creates a throttled function that only invokes func at most once per every wait milliseconds.

``` js
// Create a throttled function that only invokes saveInput
// at most once every 500ms
const throttledSave = _.throttle(saveInput, 500);

// Call it multiple times
inputField.addEventListener('input', throttledSave);
```

## Math

### sum

Computes the sum of the values in array.

``` js
// => 6
_.sum([1, 2, 3])

// => 0
_.sum([])
```

### max

Gets the maximum value of collection. If collection is empty or falsey, undefined is returned.

::: tip
In `midash`, `maxBy` is an alias of `max`.
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

Gets the minimum value of collection. If collection is empty or falsey, undefined is returned.

::: tip
In `midash`, `minBy` is an alias of `min`.
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

## Async

### sleep

Creates a Promise that resolves after the specified milliseconds.

``` js
// Pause execution for 1 second
await _.sleep(1000);
console.log('This logs after 1 second');
```

### retry

Attempts to execute a function multiple times until it succeeds.

``` js
// Retry fetching data up to 3 times
const data = await _.retry(async () => {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
}, { times: 3 });
```

### map

Asynchronously maps over an array with concurrency control.

``` js
// Process 2 items at a time
const results = await _.map([1, 2, 3, 4, 5], async (num) => {
  await _.sleep(100);
  return num * 2;
}, { concurrency: 2 });
// => [2, 4, 6, 8, 10]
```

### filter

Asynchronously filters an array with concurrency control.

``` js
// Keep only even numbers, processing 3 at a time
const evens = await _.filter([1, 2, 3, 4, 5, 6], async (num) => {
  await _.sleep(100);
  return num % 2 === 0;
}, { concurrency: 3 });
// => [2, 4, 6]
```