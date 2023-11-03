import { get } from '../src'

describe('get', function () {
  const object = { a: 1, b: 2, c: 3, d: 4 }

  it('should work', function () {
    const a = get(object, ['a'])
    const b = get(object, 'b')

    expect(a).toEqual(1)
    expect(b).toEqual(2)
  })

  it('should work when source is null or undefined', function () {
    const a = get(null, 'a')
    const b = get(undefined, 'a')

    expect(a).toEqual(undefined)
    expect(b).toEqual(undefined)
  })

  it('should work with default value', function () {
    const actual = get(object, 'a.b', 404)

    expect(actual).toEqual(404)
  })

  it('should work with array', function () {
    const actual = get({ a: { b: 3 } }, ['a', 'b'])

    expect(actual).toEqual(3)
  })

  it('should work with null', function () {
    const actual = get({ a: null }, 'a', 404)

    expect(actual).toEqual(null)
  })
})
