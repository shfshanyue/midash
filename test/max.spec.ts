import { max, maxBy } from '../src'

describe('max', function() {
  it('should work', function() {
    expect(max([-1, 0, 1])).toEqual(1)
    expect(max([1])).toEqual(1)
    expect(max([])).toEqual(undefined)
    expect(max()).toEqual(undefined)
  })
})

describe('maxBy', function() {
  it('should work', function() {
    expect(
      maxBy(
        [
          {
            a: 3,
          },
          {
            a: 4,
          },
        ],
        x => x.a
      )
    ).toEqual({ a: 4 })
  })
})
