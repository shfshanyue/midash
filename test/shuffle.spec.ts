import { shuffle } from '../src'

describe('sampleSize', function() {
  const list = [1, 2, 3, 4, 5]

  it('should work', function() {
    const actual = shuffle(list)

    expect(actual).toHaveLength(5)
    expect(actual).toEqual(expect.arrayContaining(actual))
  })

})