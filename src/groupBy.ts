export function groupBy<T>(
  list: T[],
  by: (value: T) => unknown
): Record<string, T[]> {
  if (!list?.length) {
    return {}
  }
  return list.reduce((acc, x) => {
    const key = String(by(x))
    if (acc[key]) {
      acc[key].push(x)
    } else {
      acc[key] = [x]
    }
    return acc
  }, {} as Record<string, T[]>)
}
