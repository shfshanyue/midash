export const difference = <T>(
  list: T[],
  values: T[] = [],
  by: (arg: T) => keyof any = (x => x as number)
): T[] => {
  if (!list || !list.length) return []
  if (!values.length) return [...list]
  const map: Record<keyof any, boolean> = values.reduce((acc, item) => ({
    ...acc,
    [by(item)]: true
  }), {})
  return list.filter(a => !map[by(a)])
}

export { difference as differenceBy }