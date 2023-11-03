import { isEqual } from '../src'

describe('isEqual', function () {
  it('should work', function () {
    expect(isEqual({ a: 3 }, { a: 3 })).toEqual(true)
    expect(isEqual([{ a: 3 }], [{ a: 3 }])).toEqual(true)
    expect(isEqual(new Map(), new Map())).toEqual(true)
    expect(isEqual(new Map([['a', 3]]), new Map([['a', 3]]))).toEqual(true)
    expect(isEqual(new Set(['a', 'b', 'c']), new Set(['a', 'b', 'c']))).toEqual(
      true
    )
  })

  it('should work with primitive value', function () {
    expect(isEqual(3, 3)).toEqual(true)
    expect(isEqual(NaN, NaN)).toEqual(true)
    expect(isEqual(3n, 3n)).toEqual(true)
  })
})
