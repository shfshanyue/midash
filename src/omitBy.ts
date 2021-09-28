export function omitBy<T> (obj: Record<string, T>, predicate: (value: T, key: string) => unknown) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => !Boolean(predicate(value, key))))
}
