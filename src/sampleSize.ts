import { random } from './random'

export function sampleSize<T>(list: T[], n: number = 1) {
  if (n <= 0 || Number.isNaN(n) || !list?.length) {
    return []
  }
  const result = [...list]
  const len = result.length
  n = n > len ? len : n
  for (let i = len - 1; i >= len - n; i--) {
    const rand = random(i)
    ;[result[i], result[rand]] = [result[rand], result[i]]
  }
  return result.slice(-n)
}
