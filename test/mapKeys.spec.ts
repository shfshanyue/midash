import { mapKeys, mapValues } from '../src'

describe('mapKeys', function () {
  it('should work', () => {
    expect(mapKeys({ a: 1, b: 2 }, String)).toStrictEqual({
      1: 1,
      2: 2
    })

    expect(mapKeys({ a: 3 }, () => 'b')).toStrictEqual({
      b: 3
    })

    expect(mapKeys({ a: 3, b: 4 }, String)).toStrictEqual({
      3: 3,
      4: 4
    })
  })
})

describe('mapValues', function () {
  it('should work', () => {
    expect(mapValues({ a: 3, b: 4 }, x => x + 1)).toStrictEqual({
      a: 4,
      b: 5
    })

    expect(mapValues({ a: 1, b: 2 }, String)).toStrictEqual({
      a: '1',
      b: '2'
    })

    expect(mapValues({ a: 3 }, () => 'b')).toStrictEqual({
      a: 'b'
    })

    expect(mapValues({ a: 3, b: 4 })).toStrictEqual({
      a: 3,
      b: 4
    })
  })
})