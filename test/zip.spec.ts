import { zip } from '../src'

describe('zip', () => {
  it('should zip arrays correctly', () => {
    const arr1 = [1, 2, 3]
    const arr2 = ['a', 'b', 'c']
    const arr3 = [true, false]

    const zipped = zip(arr1, arr2, arr3)

    const expected = [
      [1, 'a', true],
      [2, 'b', false],
      [3, 'c', undefined],
    ]

    expect(zipped).toEqual(expected)
  })

  it('should handle empty arrays', () => {
    const emptyArray: number[] = []
    const arr1 = [1, 2, 3]
    const zipped = zip(emptyArray, arr1)

    const expected = [
      [undefined, 1],
      [undefined, 2],
      [undefined, 3],
    ]

    expect(zipped).toEqual(expected)
  })

  it('should handle arrays of different lengths', () => {
    const arr1 = [1, 2]
    const arr2 = ['a', 'b', 'c']
    const arr3: boolean[] = []
    const zipped = zip(arr1, arr2, arr3)

    const expected = [
      [1, 'a', undefined],
      [2, 'b', undefined],
      [undefined, 'c', undefined],
    ]

    expect(zipped).toEqual(expected)
  })
})
