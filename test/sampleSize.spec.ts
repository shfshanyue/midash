import { sampleSize } from '../src'

describe('sampleSize', function() {
  const list = [1, 2, 3, 4, 5]

  it('should return an array of random elements', function() {
    const actual = sampleSize(list, 2)

    expect(actual).toHaveLength(2)
    expect(actual).toEqual(expect.arrayContaining(actual))
  })

  it('should contain elements of the collection', function() {
    const actual = sampleSize(list, list.length).sort()

    expect(actual).toStrictEqual(list)
  })

  it('should return an empty array when `n` < `1` or `NaN`', function() {
    expect(sampleSize(list, 0)).toStrictEqual([])
    expect(sampleSize(list, -1)).toStrictEqual([])
    expect(sampleSize(list, NaN)).toStrictEqual([])
  })

  it('should return all elements when `n` >= `length`', function() {
    const actual = sampleSize(list, 10086).sort()

    expect(actual).toStrictEqual(list)
  })

  it('should coerce `n` to an integer', function() {
    const actual = sampleSize(list, 2.3)

    expect(actual).toHaveLength(2)
  })

  it('should return an empty array for empty collections', function() {
    const actual = sampleSize([])

    expect(actual).toStrictEqual([])
  })

})