import { min } from '../src'

describe('min', function() {
  it('should work', function() {
    expect(min([-1, 0, 1])).toEqual(-1)
    expect(min([1])).toEqual(1)
    expect(min([])).toEqual(undefined)
    expect(min()).toEqual(undefined)
  })
})
