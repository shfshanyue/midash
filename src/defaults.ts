export function defaults(
  obj: Record<any, any>,
  ...sources: Record<any, any>[]
) {
  return sources.reduce((obj, source) => {
    for (const key of Object.keys(source)) {
      if (obj[key] === undefined) {
        obj[key] = source[key]
      }
    }
    return obj
  }, obj)
}
