import { pick } from '../src'

describe('pick', function () {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  it('should work', function () {
    const actual = pick(object, ['a', 'c', 'z'])

    expect(actual).toEqual({ a: 1, c: 3 })

    expect(pick({ a: undefined }, ['a'])).toStrictEqual({ a: undefined })
    expect(pick({}, ['a'])).toStrictEqual({})
    expect(pick(object)).toEqual({})
    expect(pick(undefined)).toEqual({})
  })

  it('should work with second arguments', function () {
    const actual = pick(object)

    expect(actual).toEqual({})
  })
})
