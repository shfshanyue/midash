export function max (list?: number[]) {
  if (!list || !list.length) {
    return
  }
  return list?.reduce((x, y) => x > y ? x : y)
}

export function maxBy <T>(list: T[], by: (value: T) => number | string): T | undefined {
  if (!list || !list.length) {
    return
  }
  return list.reduce((x, y) => by(x) > by(y) ? x : y)
}