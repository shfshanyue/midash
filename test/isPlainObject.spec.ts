import { isPlainObject } from '../src'

describe('isObject', function () {
  it('should work', function () {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject(Object.create(null))).toBe(true)

    expect(isPlainObject([])).toBe(false)
    expect(isPlainObject(() => {})).toBe(false)
    expect(isPlainObject(new Date())).toBe(false)
    expect(isPlainObject(3)).toBe(false)
    expect(isPlainObject(Object.create({ a: 3 }))).toBe(false)
  })
})
