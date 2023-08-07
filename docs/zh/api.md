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

### assign
分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性。

``` js
// => { a: 1, b: 3, c: 5, d: 6 }
_.assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 })
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

### zip
创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
```  js
// => [[1, 'a', true],[2, 'b', false],[3, 'c', undefined]];
_.zip([1, 2, 3], ['a', 'b', 'c'], [true, false]);

// => [[undefined, 1], [undefined, 2], [undefined, 3]];
_.zip([],[1, 2, 3])

// => [[1, 'a', undefined], [2, 'b', undefined],[undefined, 'c', undefined]];
_.zip([1, 2], ['a', 'b', 'c'], [])
```
### unzip
这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）

``` js
// => [[1, 2, 3], ['a', 'b', 'c'], [true, false, true]]
_.unzip([[1, 'a', true], [2, 'b', false], [3, 'c', true]])

// => []
_.unzip([])

// => [[1, 2, 4], ['a', 'b', 'c'], [undefined, 3, undefined]]
_.unzip([[1, 'a'], [2, 'b', 3], [4, 'c']])
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

### castArray
如果 value 不是数组, 那么强制转为数组。
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

从右至左执行函数，并将上一个函数的返回值作为下一个函数的参数。`flowRight` 是 `compose` 的别名。

``` js
const double = x => x * 2
const square = x => x * x

//=> 200
_.compose(double, square)(10)
_.flowRight(double, square)(10)
```
### property

创建一个返回给定对象的 path 的值的函数。
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