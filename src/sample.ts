import { random } from './random'

export function sample<T>(list: T[] = []) {
  const len = list.length
  return len ? list[random(len - 1)] : undefined
}
