import { sample } from '../src'

describe('sample', function () {
  const list = [1, 2, 3, 4, 5]

  it('should return a random element', function () {
    for (let i = 0; i < 10; i++) {
      const actual = sample(list)
      expect(list).toContain(actual)
    }
  })

  it('should return `undefined` when sampling empty collections', function () {
    const actual = sample([])
    expect(actual).toBe(undefined)
  })
})
