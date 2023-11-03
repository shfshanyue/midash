import { clone, cloneDeep } from '../src'

describe('clone', function() {
  it('should work', function() {
    expect(clone({ a: 3, b: 4 })).toEqual({ a: 3, b: 4 })
    expect(clone([3, 4, 5])).toEqual([3, 4, 5])
    expect(clone(3)).toEqual(3)
  })
  it('should work with shallow clone', function() {
    const o = { a: { b: 4 } }
    expect(clone(o)).toEqual(o)
    expect(clone(o).a).toBe(o.a)
    expect(clone(o)).not.toBe(o)
  })
  it('should work with date', function() {
    const d = new Date()
    expect(clone(d)).toBe(d)
    // expect(clone(d)).not.toBe(d)
  })
})

describe('cloneDeep', function() {
  it('should work', function() {
    const o = { a: { b: 4 } }
    expect(cloneDeep(o)).toEqual(o)
    expect(cloneDeep(o).a === o.a).toBe(false)
    expect(cloneDeep(o).a).not.toBe(o.a)
    expect(cloneDeep(o)).not.toBe(o)
  })
})
