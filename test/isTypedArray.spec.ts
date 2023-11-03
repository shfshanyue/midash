import { isTypedArray } from '../src'

describe('isTypedArray', function () {
  it('should work', function () {
    expect(isTypedArray(new Uint16Array([3, 4, 5]))).toBe(true)
    expect(isTypedArray([])).toBe(false)
  })
})
