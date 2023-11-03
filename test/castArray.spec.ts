import { castArray } from '../src'

describe('castArray function', () => {
  it('should convert a non-array value to an array', () => {
    expect(castArray(42)).toEqual([42])
    expect(castArray('hello')).toEqual(['hello'])
    expect(castArray(null)).toEqual([null])
  })

  it('should return the input array unchanged', () => {
    const inputArray = [1, 2, 3]
    expect(castArray(inputArray)).toBe(inputArray)
  })

  it('should return an empty array if no arguments are provided', () => {
    expect(castArray()).toEqual([])
  })
})
