import { retry, AbortError, filter, map, sleep } from '../src'
import timeSpan from 'time-span'

describe('async filter', function () {
  it('expect work', async () => {
    const r1 = await filter([Promise.resolve(1), 2, 3, 4], (x: any) => Boolean(x % 2))
    const r2 = await filter([Promise.resolve(1), 2, 3, 4], (x: any) => Promise.resolve(Boolean(x % 2)))

    expect(r1).toStrictEqual([1, 3])
    expect(r2).toStrictEqual([1, 3])
  })
})

describe('async map', function () {
  const input = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    4,
    5,
    6
  ]

  const addOne = async (n: number | Promise<number>) => {
    n = await n
    return n + 1
  }

  it('expect work', async () => {
    const r = await map(input, x => addOne(x))
    expect(r).toStrictEqual([2, 3, 4, 5, 6, 7])
  })

  it('expect work with concurrency', async () => {

    const ts = timeSpan()
    const r = await map(input, async x => {
      await sleep(300)
      return addOne(x)
    }, { concurrency: 1 })
    const time = ts()
    expect(r).toStrictEqual([2, 3, 4, 5, 6, 7])
    expect(time).toBeGreaterThan(1800)
    expect(time).toBeLessThan(2000)
  })

  it('expect work with concurrency 2', async () => {

    const ts = timeSpan()
    const r = await map(input, async x => {
      await sleep(300)
      return addOne(x)
    }, { concurrency: 2 })
    const time = ts()
    expect(r).toStrictEqual([2, 3, 4, 5, 6, 7])
    expect(time).toBeGreaterThan(900)
    expect(time).toBeLessThan(1000)
  })

  it('expect work with concurrency 3', async () => {

    const ts = timeSpan()
    const r = await map(input, async (x, i) => {
      await sleep(i * 100)
      return addOne(x)
    }, { concurrency: 2 })
    const time = ts()
    expect(r).toStrictEqual([2, 3, 4, 5, 6, 7])
    expect(time).toBeGreaterThan(900)
    expect(time).toBeLessThan(1000)
  })
})

describe('async retry', function () {
  it('expect work', async () => {
    let i = 0
    const result = 100

    const data = await retry(async attemptNumber => {
      i++
      return attemptNumber === 3 ? result : Promise.reject(new Error('error'))
    }, {
      times: 3
    })
  
    expect(data).toStrictEqual(100)
    expect(i).toStrictEqual(3)
  })

  it('abort', async () => {
    let i = 0
    const err = new AbortError('hello')

    try {
      await retry(async () => {
        i++
        return Promise.reject(err)
      }, {
        times: 3
      })
    } catch (e) {
      expect(e).toStrictEqual(err)
    }
  
    expect(i).toStrictEqual(1)
  })

  it('onFailedAttempt can return a promise to add a delay', async () => {

    const waitFor = 1000
    const start = Date.now()
    const result = 100
    let isCalled: boolean
  
    const r = await retry(
      async () => {
        if (isCalled) {
          return result
        }
  
        isCalled = true
  
        throw new Error('error')
      },
      {
        onFailedAttempt: async () => {
          await sleep(waitFor)
        }
      }
    )
  
    expect(Date.now()).toBeGreaterThanOrEqual(start + waitFor)
    expect(r).toEqual(result)
  })
})