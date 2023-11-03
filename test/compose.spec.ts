import { compose, flowRight } from '../src'

describe('compose', () => {
  it('should work', () => {
    const double = (x: number) => x * 2
    const addFive = (x: number) => x + 5

    expect(compose(double)(5)).toBe(10)
    expect(compose(addFive, double)(5)).toBe(15)
    expect(compose(addFive, double, addFive, double)(5)).toBe(35)

    expect(compose).toBe(flowRight)
  })

  it('shoul work with multiple arguments', () => {
    const square = (x: number) => x * x
    const add = (x: number, y: number) => x + y

    expect(compose(square, add)(1, 2)).toBe(9)
  })
})
