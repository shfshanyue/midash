import { sampleSize } from './sampleSize'

export function shuffle<T>(list: T[]) {
  return sampleSize(list, list.length)
}
