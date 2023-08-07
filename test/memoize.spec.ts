import { memoize } from '../src'

describe('memorize', function () {
  it('memorize function should return cached result when input is same', () => {
    let count = 0
    const fn = (x: number): number => {
      count++
      return x * x
    }
    const memoizedFunction = memoize(fn)

    const firstResult = memoizedFunction(5)  // 输出 25，这次需要计算
    const secondResult = memoizedFunction(5)  // 输出 25，这次直接从缓存中获取结果，不需要计算

    // 验证memoizedFunction(5)的结果是正确的
    expect(firstResult).toEqual(25)
    expect(secondResult).toEqual(25)

    // 验证fn只被调用了一次
    expect(count).toEqual(1)
  })
})