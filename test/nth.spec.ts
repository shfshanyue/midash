import { nth } from '../src'

describe('min', function () {
  const list = [1, 2, 3, 4, 5, 6]
  it('should work', function () {
    expect(nth(list, 3)).toEqual(4)
    expect(nth(list, -3)).toEqual(4)
  })
})
