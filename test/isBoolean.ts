import { isBoolean } from '../src'

describe('isBoolean', function () {
  it('should work', function () {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(false)
  })
})
