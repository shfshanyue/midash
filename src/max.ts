export function max<T>(list?: T[], by: (value: T) => number | string = ((x: T) => x as number)): T | undefined {
  if (!list || !list.length) {
    return
  }
  return list.reduce((x, y) => by(x) > by(y) ? x : y)
}

export { max as maxBy }
