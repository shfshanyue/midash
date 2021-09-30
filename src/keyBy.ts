export function keyBy<T>(
  list: T[],
  by: (value: T) => unknown
): Record<string, T> {
  return list.reduce((acc, x) => {
    const key = String(by(x));
    acc[key] = x;
    return acc;
  }, {} as Record<string, T>);
}
