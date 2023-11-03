export function uniqBy<T>(list: T[], by: (value: T) => unknown): T[] {
  const uniqMap: { [key: string]: T } = {}
  for (let item of list ?? []) {
    const key = (by(item) as unknown) as string
    if (!uniqMap[key]) {
      uniqMap[key] = item
    }
  }
  return Object.values(uniqMap)
}
