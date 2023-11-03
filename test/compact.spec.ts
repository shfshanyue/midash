import { compact } from '../src'

describe('compact', function() {
  it('should work', function() {
    expect(compact([1, 0, 2, false])).toEqual([1, 2])

    expect(compact([{}, undefined, null, 3])).toEqual([{}, 3])

    expect(compact(['a', 'b', 'c', '', 'd'])).toEqual(['a', 'b', 'c', 'd'])
  })
})
