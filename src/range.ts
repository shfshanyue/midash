export function range(start: number, end?: number, step?: number): number[] {
  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === 0) {
    return Array(Math.ceil(end - start)).fill(start)
  }

  step = step || (start > end ? -1 : 1)

  const r = []
  for (let i = start; start > end ? i > end : i < end; i += step) {
    r.push(i)
  }

  return r
}