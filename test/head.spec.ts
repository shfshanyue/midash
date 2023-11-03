import { head, tail, take } from '../src'

describe('groupBy', function() {
  const list = [1, 2, 3, 4, 5]
  it('head should work', function() {
    expect(head()).toEqual(undefined)
    expect(head([])).toEqual(undefined)
    expect(head(list)).toEqual(1)
  })

  it('tail should work', function() {
    expect(tail()).toEqual([])
    expect(tail([])).toEqual([])
    expect(tail(list)).toEqual([2, 3, 4, 5])
  })

  it('take should work', function() {
    expect(take()).toEqual([])
    expect(take([])).toEqual([])
    expect(take([1, 2, 3])).toEqual([1])
    expect(take([1, 2, 3], 2)).toEqual([1, 2])
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3])
    expect(take([1, 2, 3], 0)).toEqual([])
  })
})
