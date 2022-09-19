import { merge } from '../src'

describe('merge', function () {
  it('should work', function () {
    expect(merge({
      a: 3
    }, {
      b: 4
    })).toEqual({
      a: 3,
      b: 4
    })
  })

  it('should work with array', function () {
    expect(merge(['a', 'b'], ['c'])).toEqual(['c', 'b'])
  })

  // lodash.js Test Case
  // https://github.com/lodash/lodash/blob/master/test/merge.test.js#L8
  it('should merge `source` into `object`', function () {
    const names = {
      'characters': [
        { 'name': 'barney' },
        { 'name': 'fred' }
      ]
    }

    const ages = {
      'characters': [
        { 'age': 36 },
        { 'age': 40 }
      ]
    }

    const heights = {
      'characters': [
        { 'height': '5\'4"' },
        { 'height': '5\'5"' }
      ]
    }

    const expected = {
      'characters': [
        { 'name': 'barney', 'age': 36, 'height': '5\'4"' },
        { 'name': 'fred', 'age': 40, 'height': '5\'5"' }
      ]
    }

    expect(merge(names, ages, heights)).toEqual(expected)
  })

  it('should work with more arguments', function () {
    const actual = merge({ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 })

    expect(actual).toEqual({ a: 4 })
  })

  it('should work with function', function () {
    const fn = function () {}

    const actual = merge({ a: fn }, { a: fn }, { a: {} })

    expect(actual).toEqual({ a: {} })
  })
})
