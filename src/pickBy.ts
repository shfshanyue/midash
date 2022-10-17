export function pickBy<T>(
  obj: Record<string, T>,
  predicate: (value: T, key: string) => unknown = (() => true)
) {
  if (!obj) {
    return {}
  }
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => Boolean(predicate(value, key)))
  )
}
