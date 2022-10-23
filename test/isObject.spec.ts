import { isObject } from '../src'

describe('isObject', function() {
  it('should work', function() {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(() => {})).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(3)).toBe(false)
  })
})
