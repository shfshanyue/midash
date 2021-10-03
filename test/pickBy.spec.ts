import { pickBy } from '../src'

describe('pickBy', function() {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  it('should work with value', function() {
    const actual = pickBy(object, function(n) {
      return n === 1 || n === 3
    })

    expect(actual).toEqual({ a: 1, c: 3 })
  })

  it('should work with key', function() {
    const actual = pickBy(object, function(_, n) {
      return n === 'a' || n === 'b'
    })

    expect(actual).toEqual({ a: 1, b: 2 })
  })
})
