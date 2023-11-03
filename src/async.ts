export function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

interface RetryOptions {
  readonly times?: number
  readonly onFailedAttempt?: (error: Error) => void | Promise<void>
}

export class AbortError extends Error {
  originalError: Error

  constructor(message: string | Error) {
    super()

    if (message instanceof Error) {
      this.originalError = message
      ;({ message } = message)
    } else {
      this.originalError = new Error(message)
      this.originalError.stack = this.stack
    }

    this.name = 'AbortError'
    this.message = message
  }
}

export async function retry<T>(
  run: (attemptCount: number) => Promise<T> | T,
  { times = 10, onFailedAttempt = () => {} }: RetryOptions = {}
) {
  let count = 1
  async function exec(): Promise<T> {
    try {
      const result = await run(count)
      return result
    } catch (e) {
      if (count >= times || e instanceof AbortError) {
        throw e
      }
      count++
      await onFailedAttempt(e as Error)
      return exec()
    }
  }
  return exec()
}

interface MapOptions {
  readonly concurrency?: number
  readonly settled?: boolean
}

export type Mapper<Element = any, NewElement = unknown> = (
  element: Element,
  index: number
) => NewElement | Promise<NewElement>

export function map<Element, NewElement>(
  it: Iterable<Element>,
  mapper: Mapper<Element, NewElement>,
  { concurrency = Infinity }: MapOptions = {}
): Promise<NewElement[]> {
  const list = Array.from(it)
  return new Promise(resolve => {
    let currentIndex = 0
    let result: NewElement[] = []
    let resolveCount = 0
    let len = list.length
    function next() {
      const index = currentIndex
      currentIndex++
      Promise.resolve(list[index])
        .then(o => mapper(o, index))
        .then(o => {
          result[index] = o
          resolveCount++
          if (resolveCount === len) {
            resolve(result)
          }
          if (currentIndex < len) {
            next()
          }
        })
    }
    for (let i = 0; i < concurrency && i < len; i++) {
      next()
    }
  })
}

export async function filter<Element>(
  it: Iterable<Element>,
  filterer: (item: Element, index: number) => boolean | Promise<boolean>,
  options?: MapOptions
): Promise<Element[]> {
  const list = await map<Element, [Element, boolean]>(
    it,
    async (item, index) => {
      const bool = await filterer(item, index)
      return [item, bool]
    },
    options
  )
  return list.filter(([_, bool]) => bool).map(([item]) => item)
}
