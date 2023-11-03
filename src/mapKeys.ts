export function mapKeys<
  T,
  K extends string | number | symbol,
  KNew extends string | number | symbol
>(
  obj: Record<K, T>,
  iteratee: (value: T, key: string) => KNew = value =>
    (value as unknown) as KNew
): Record<KNew, T> {
  return Object.entries<T>(obj).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [iteratee(value, key)]: value,
    }
  }, {} as Record<KNew, T>)
}

export function mapValues<T, K extends string | number | symbol, TNew>(
  obj: Record<K, T>,
  iteratee: (value: T, key: string) => TNew = value =>
    (value as unknown) as TNew
): Record<K, TNew> {
  return Object.entries<T>(obj).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: iteratee(value, key),
    }
  }, {} as Record<K, TNew>)
}
