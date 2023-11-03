import { random } from '../src'

describe('sampleSize', function () {
  it('should work', function () {
    expect(random(10, 10)).toEqual(10)
    expect(random(0, 0)).toEqual(0)
    expect(random(0)).toEqual(0)
    expect(random(0, 1)).toBeGreaterThanOrEqual(0)
    expect(random(0, 1)).toBeLessThanOrEqual(1)
    expect(random()).toBeGreaterThanOrEqual(0)
    expect(random()).toBeLessThanOrEqual(1)
  })
})
