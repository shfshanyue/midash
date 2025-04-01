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

将来源对象中的所有可枚举属性分配到目标对象上，但仅在目标对象的属性为 undefined 时才分配。

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
_.merge({ a: 1 }, { b: 2 }, { a: 3 }, { a: 4 })
```

### assign

分配来源对象的可枚举属性到目标对象上。 来源对象的应用规则是从左到右，随后的下一个对象的属性会覆盖上一个对象的属性。

``` js
// => { a: 1, b: 3, c: 5, d: 6 }
_.assign({ a: 1, b: 2 }, { b: 3, c: 4 }, { c: 5, d: 6 })
```

### mapKeys

使用函数转换对象的键，并返回新对象。

``` js
//=> { a3: 3, b4: 4 }
_.mapKeys({ a: 3, b: 4 }, (v, k) => `${k}${v}`)
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

### shuffle

创建一个被打乱元素顺序的数组。

``` js
//=> [2, 3, 1]（随机顺序）
_.shuffle([1, 2, 3])
```

### difference/differenceBy

创建一个不包含在其他给定数组中的数组值的新数组。

:::  tip
在 `midash` 中，`differenceBy` 是 `difference` 的别名。
:::

``` js
//=> [2, 4]
_.difference([1, 2, 3, 4], [1, 3, 5])

//=> [{ a: 4 }]
_.differenceBy([{ a: 3 }, { a: 4 }], [{ a: 3 }], x => x.a)
```

### intersection

创建一个包含所有给定数组中共有元素的新数组。

``` js
//=> [2]
_.intersection([1, 2], [2, 3])

//=> [{ id: 1 }]
_.intersection([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 3 }], item => item.id)
```

### uniq

创建一个去重后的数组。

``` js
//=> [1, 2, 3]
_.uniq([1, 2, 3, 1, 2])
```

### uniqBy

使用迭代函数的返回值来进行去重。

``` js
//=> [{ id: 1 }, { id: 2 }]
_.uniqBy([{ id: 1 }, { id: 2 }, { id: 1 }], item => item.id)
```

### keyBy

根据条件生成键，并对数组转化为对象。

``` js
const list = [
  { id: 1, name: 'hello' },
  { id: 2, name: 'world' },
]

//=> { '1': { id: 1, name: 'hello' }, '2': { id: 2, name: 'world' } }
_.keyBy(list, x => x.id)
```

### groupBy

根据条件对数组进行分组。

``` js
//=> { '3': ['one', 'two'], '5': ['three'] }
_.groupBy(['one', 'two', 'three'], x => x.length)
```

### zip

创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。

``` js
// => [[1, 'a', true],[2, 'b', false],[3, 'c', undefined]];
_.zip([1, 2, 3], ['a', 'b', 'c'], [true, false]);

// => [[undefined, 1], [undefined, 2], [undefined, 3]];
_.zip([],[1, 2, 3])

// => [[1, 'a', undefined], [2, 'b', undefined],[undefined, 'c', undefined]];
_.zip([1, 2], ['a', 'b', 'c'], [])
```

### unzip

这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。

``` js
// => [[1, 2, 3], ['a', 'b', 'c'], [true, false, true]]
_.unzip([[1, 'a', true], [2, 'b', false], [3, 'c', true]])

// => []
_.unzip([])

// => [[1, 2, 4], ['a', 'b', 'c'], [undefined, 3, undefined]]
_.unzip([[1, 'a'], [2, 'b', 3], [4, 'c']])
```

### compact

过滤掉数组中的假值( `false`、`undefined`、`null`、`''`、`0`), 并返回新数组。

``` js
// => [1, 2, 3]
_.compact([0, 1, false, 2, '', 3])
```

### head

获取数组中的第一个元素。

``` js
// => 1
_.head([1, 2, 3])

// => undefined
_.head([])
```

### nth

获取数组中指定索引的元素。如果索引为负数，则从末尾开始计数。

``` js
// => 2
_.nth([1, 2, 3], 1)

// => 3
_.nth([1, 2, 3], -1)
```

## String

### camelCase

将字符串转换为驼峰式。

``` js
// => 'fooBar'
_.camelCase('foo_bar')

// => 'fooBar'
_.camelCase('foo-bar')

// => 'fooBar'
_.camelCase('Foo Bar')
```

### snakeCase

将字符串转换为下划线式。

``` js
// => 'foo_bar'
_.snakeCase('fooBar')

// => 'foo_bar'
_.snakeCase('foo-bar')

// => 'foo_bar'
_.snakeCase('Foo Bar')
```

### kebabCase

将字符串转换为短横线连接式。

``` js
// => 'foo-bar'
_.kebabCase('fooBar')

// => 'foo-bar'
_.kebabCase('foo_bar')

// => 'foo-bar'
_.kebabCase('Foo Bar')
```

### words

将字符串分割成单词数组。

``` js
// => ['foo', 'bar']
_.words('foo bar')

// => ['foo', 'bar']
_.words('foo-bar', /[^, -]+/g)
```

### template

创建一个预编译模板函数，可以插入数据属性。

``` js
// => 'Hello Fred!'
_.template('Hello ${name}!')({ name: 'Fred' })
```

## Number

### random

获取一个随机整数。

``` js
// 10 到 20 之间的一个随机整数，闭区间，包括 10 与 20
_.random(10, 20)

// 0 到 20 之间的一个随机整数
_.random(20)

// 0 到 1 之间的一个随机整数
_.random()
```

### range

创建一个包含从 start 到 end（不包括end）之间步长为 step 的数字的数组。

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

检查值是否为 Array 类型。

``` js
//=> true
_.isArray([])

//=> false
_.isArray({})
```

### isBoolean

检查值是否为布尔原始类型。

``` js
//=> true
_.isBoolean(false)

//=> true
_.isBoolean(true)

//=> false
_.isBoolean(null)
```

### isObject

检查值是否为 Object 类型。

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

检查值是否为普通对象。

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

检查值是否为 Promise 对象。

``` js
//=> true
_.isPromise(Promise.resolve())

//=> false
_.isPromise({})
```

### isPrimitive

检查值是否为原始类型。

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

检查值是否为类型化数组。

``` js
//=> true
_.isTypedArray(new Uint8Array([1, 2, 3]))

//=> false
_.isTypedArray([])
```

### isEqual

执行深度比较两个值是否相等。

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

从右至左执行函数，并将上一个函数的返回值作为下一个函数的参数。

:::  tip
在 `midash` 中，`flowRight` 是 `compose` 的别名。
:::

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

### once

创建一个只能调用一次的函数。重复调用将返回第一次调用的结果。

``` js
// `initialize` 只能调用 `createApplication` 一次。
const initialize = _.once(createApplication);
initialize();
initialize(); // 无效
```

### memoize

创建一个会缓存 func 结果的函数。

``` js
const object = { 'a': 1, 'b': 2 };
const other = { 'c': 3, 'd': 4 };

// => [1, 2]
const values = _.memoize(Object.values);
values(object);

// => [3, 4]
values(other);

object.a = 2;
// => [1, 2] (缓存结果)
values(object);
```

### debounce

创建一个防抖函数，该函数会在调用结束后的指定毫秒后才执行。

``` js
// 创建一个防抖函数，只有在上次调用后至少200ms才会执行updateChart
const debouncedUpdate = _.debounce(updateChart, 200);

// 多次调用
window.addEventListener('resize', debouncedUpdate);
```

### throttle

创建一个节流函数，该函数最多每隔 wait 毫秒执行一次。

``` js
// 创建一个节流函数，每500ms最多执行saveInput一次
const throttledSave = _.throttle(saveInput, 500);

// 多次调用
inputField.addEventListener('input', throttledSave);
```

## Math

### sum

计算数组中所有值的总和。

``` js
// => 6
_.sum([1, 2, 3])

// => 0
_.sum([])
```

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

## Async

### sleep

创建一个在指定毫秒后解析的 Promise。

``` js
// 暂停执行1秒
await _.sleep(1000);
console.log('1秒后输出');
```

### retry

尝试多次执行一个函数，直到成功。

``` js
// 最多尝试3次获取数据
const data = await _.retry(async () => {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) throw new Error('获取失败');
  return response.json();
}, { times: 3 });
```

### map

异步映射数组，可控制并发数量。

``` js
// 一次处理2个项目
const results = await _.map([1, 2, 3, 4, 5], async (num) => {
  await _.sleep(100);
  return num * 2;
}, { concurrency: 2 });
// => [2, 4, 6, 8, 10]
```

### filter

异步过滤数组，可控制并发数量。

``` js
// 仅保留偶数，一次处理3个项目
const evens = await _.filter([1, 2, 3, 4, 5, 6], async (num) => {
  await _.sleep(100);
  return num % 2 === 0;
}, { concurrency: 3 });
// => [2, 4, 6]
```