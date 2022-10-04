import { sum } from '../src'

describe('range', function () {
  it('should work', function () {
    expect(sum()).toEqual(0)
    expect(sum([1])).toEqual(1)
    expect(sum([1, 2])).toEqual(3)
    expect(sum([1, 2, 3])).toEqual(6)
  })
})
