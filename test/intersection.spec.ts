import { intersection } from '../src'
import { intersectionBy } from '../src'

describe('should work', function () {
  let list = [['a', 'b', 'c'], ['a', 'c'], ['a'], ['a', 'd']]
  it('should work', function () {
    expect(intersection()).toEqual([])
    expect(intersection([])).toEqual([])
    expect(intersection([2, 1], [4, 2], [1, 2])).toEqual([2])
    expect(intersection([2, 1])).toEqual([2, 1])
    expect(intersection(...list)).toEqual(['a'])
  })

  it('should work with by', function () {
    expect(intersectionBy()).toEqual([])
    expect(intersectionBy([])).toEqual([])
    expect(intersectionBy([{ 'x': 1 }])).toEqual([{ 'x': 1 }])
    expect(intersectionBy([2, 1], [4, 2], [1, 2], Math.floor)).toEqual([2])
    expect(intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], x => x.x)).toEqual([{ 'x': 1 }])
  })
})
