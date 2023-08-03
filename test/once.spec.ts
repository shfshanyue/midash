import { once } from '../src'

describe('once', function () {
  it('once function should only allow the inner function to be called once', () => {
    let count = 0
    const fn = () => count++
    const onceFn = once(fn)

    onceFn()
    onceFn()

    expect(count).toEqual(1)
  })
})