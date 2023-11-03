import { omitBy } from '../src'

describe('omitBy', function () {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  it('should work', function () {
    expect(omitBy(object, x => x === 3)).toEqual({ a: 1, b: 2, d: 4 })
    expect(omitBy(object, undefined as unknown as () => boolean)).toEqual({})
  })

  it('should work with value', function () {
    const actual = omitBy(object, n => {
      return n === 1 || n === 3
    })

    expect(actual).toEqual({ b: 2, d: 4 })
  })

  it('should work with key', function () {
    const actual = omitBy(object, (_, n) => {
      return n === 'a' || n === 'b'
    })

    expect(actual).toEqual({ c: 3, d: 4 })
  })
})
