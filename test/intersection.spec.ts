import { intersection } from '../src'

describe('isObject', function() {
  let list = [['a', 'b','c'], ['a','c'], ['a'], ['a', 'd']]
  it('should work', function() {
    expect(intersection(...list)).toEqual(['a'])
  })
})
