export function intersection<T>(
  ...list: T[][]
): T[] {
  return list.reduce((a, b) => a.filter(c => b.includes(c)));
}
