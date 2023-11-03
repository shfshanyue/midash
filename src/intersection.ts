type by<T> = (item: T) => number | string

export function intersection<T>(...args: Array<T[] | by<T>>): T[] {
  if (!args || !args.length) return []
  if (args.slice(0, args.length - 1).find(item => typeof item === 'function'))
    return []
  const list: T[][] = args.filter(Array.isArray)
  const by: by<T> =
    typeof args[args.length - 1] === 'function'
      ? (args[args.length - 1] as by<T>)
      : x => x as number
  return list?.reduce((a, b) => {
    const setB = new Set(b.map(by))
    return a.filter(c => setB.has(by(c)))
  })
}

export { intersection as intersectionBy }
