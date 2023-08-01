import { isArray } from '../src'

describe('isObject', function() {
  it('should work', function() {
    expect(isArray([])).toBe(true)
    expect(isArray({ length: 3 })).toBe(false)
  })
})
