export function omitBy<T extends object>(
  obj: T,
  predicate: (value: T[keyof T], key: string) => unknown
): Partial<T>

export function omitBy<T>(
  obj: Record<string, T>,
  predicate: (value: T, key: string) => unknown = () => true
): Record<string, T> {
  if (!obj) {
    return {}
  }
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) => !Boolean(predicate(value, key))
    )
  )
}
