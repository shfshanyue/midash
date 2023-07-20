export function nth<T>(list: T[], n: number = 0): undefined | T {
  return n >= 0 ? list[n] : list[list.length + n]
}