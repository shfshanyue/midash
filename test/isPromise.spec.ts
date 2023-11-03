import { isPromise } from '../src'

describe('isPromise', function () {
  it('should work', function () {
    async function f() {}

    expect(isPromise(Promise.resolve())).toBe(true)
    expect(isPromise(f())).toBe(true)
  })
})
