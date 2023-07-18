import { uniqBy } from '../src'

describe('sampleSize', function () {
  const list = [1.1, 2.5, 3.5, 4.1, 5.4, 1.5, 2.3, 3.7, 4.9, 5.3, 6.3]

  const testData = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Jerry' },
    { id: 1, name: 'Tom' },
    { id: 3, name: 'Spike' },
    { id: 2, name: 'Jerry' },
  ];

  const testStrings = ['Tom', 'Jerry', 'Tom', 'Spike', 'Jerry']

  it('should work', function () {
    const actual = uniqBy(list, Math.floor)

    expect(actual).toEqual([1.1, 2.5, 3.5, 4.1, 5.4, 6.3])
  })

  it('should work', function () {
    const actual = uniqBy(testData, item => item.id)

    expect(actual).toEqual([{ id: 1, name: 'Tom' }, { id: 2, name: 'Jerry' }, { id: 3, name: 'Spike' }])
  })

  it('should work', function () {
    const actual = uniqBy(testStrings, item => item)

    expect(actual).toEqual(['Tom', 'Jerry', 'Spike'])
  })
})
