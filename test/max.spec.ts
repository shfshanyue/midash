import { max } from '../src'

describe('max', function() {
  it('should work', function() {
    expect(max([-1, 0, 1])).toEqual(1)
    expect(max([1])).toEqual(1)
    expect(max([])).toEqual(undefined)
    expect(max()).toEqual(undefined)
  })
})
