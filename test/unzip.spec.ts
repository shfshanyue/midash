import { unzip } from '../src'

describe('unzip', () => {
  it('should correctly unzip an array of arrays', () => {
    const input = [
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', true],
    ]
    const result = unzip(input)

    expect(result).toEqual([
      [1, 2, 3],
      ['a', 'b', 'c'],
      [true, false, true],
    ])
  })

  it('should handle empty input', () => {
    const input: any[][] = []
    const result = unzip(input)

    expect(result).toEqual([])
  })

  it('should handle arrays of different lengths', () => {
    const input = [
      [1, 'a'],
      [2, 'b', 3],
      [4, 'c'],
    ]
    const result = unzip(input)

    expect(result).toEqual([
      [1, 2, 4],
      ['a', 'b', 'c'],
      [undefined, 3, undefined],
    ])
  })
})
