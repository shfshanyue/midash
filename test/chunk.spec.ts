import { chunk } from '../src'

describe('chunk', function () {
  const array = [0, 1, 2, 3, 4, 5]

  it('should work', function () {
    const actual = chunk(array, 3)
    expect(actual).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ])
  })

  it('should work with string', function () {
    const actual = chunk('abcdefghi', 3)
    expect(actual).toEqual(
      [
        [
          "a",
          "b",
          "c"
        ],
        [
          "d",
          "e",
          "f"
        ],
        [
          "g",
          "h",
          "i"
        ]
      ])
  })

  it('should work with no size argument', function () {
    const actual = chunk(array)
    expect(actual).toEqual([[0], [1], [2], [3], [4], [5]])
  })
})
