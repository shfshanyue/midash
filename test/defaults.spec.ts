import { defaults } from '../src'

describe('get', function() {
  it('should work', function() {
    expect(defaults({ a: 1 }, { b: 2 }, { a: 3 })).toEqual({ a: 1, b: 2 })
    expect(defaults({ a: 1, b: 2 }, { b: 3 }, { c: 3 })).toEqual({
      a: 1,
      b: 2,
      c: 3,
    })
    expect(defaults({ a: null }, { a: 1 })).toEqual({ a: null })
    expect(defaults({ a: undefined }, { a: 1 })).toEqual({ a: 1 })
  })
})
