import { range } from '../src'

describe('range', function() {
  it('should work', function() {
    expect(range(4)).toEqual([0, 1, 2, 3])
    expect(range(-4)).toEqual([0, -1, -2, -3])

    expect(range(1, 5)).toEqual([1, 2, 3, 4])
    expect(range(5, 1)).toEqual([5, 4, 3, 2])

    expect(range(0, -4, -1)).toEqual([0, -1, -2, -3])
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2])
    expect(range(0, 20, 5)).toEqual([0, 5, 10, 15])

    expect(range(1, 5, 0)).toEqual([1, 1, 1, 1])
  })
})
