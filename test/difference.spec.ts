import { difference, differenceBy } from '../src'

describe('max', function() {
  it('should work', function() {
    expect(difference([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(difference([1, 2, 3, 4], [])).toEqual([1, 2, 3, 4])
    expect(difference([1, 2, 3, 4], [1, 3, 5])).toEqual([2, 4])
  })

  it('should work with differenceBy', function() {
    expect(difference).toBe(differenceBy)
    expect(differenceBy([{ a: 3 }, { a: 4 }], [], x => x.a)).toEqual([
      { a: 3 },
      { a: 4 },
    ])
    expect(differenceBy([{ a: 3 }, { a: 4 }], [{ a: 3 }], x => x.a)).toEqual([
      { a: 4 },
    ])
    expect(differenceBy([3.5, 4.5], [3.8, 5.8], Math.floor)).toEqual([4.5])
  })
})
