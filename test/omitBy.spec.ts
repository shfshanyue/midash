import { omitBy } from '../src'

describe('omitBy', function () {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  it('should work with value', function () {
    const actual = omitBy(object, function (n) {
      return n == 1 || n == 3
    })

    expect(actual).toEqual({ b: 2, d: 4 })
  })

  it('should work with key', function () {
    const actual = omitBy(object, function (_, n) {
      return n == 'a' || n === 'b'
    })

    expect(actual).toEqual({ c: 3, d: 4 })
  })
})
