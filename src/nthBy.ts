export function nthBy<T>(
  list: T[],
  by: (value: T) => unknown
): T | undefined {
  return list.find(by)
}