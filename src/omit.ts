export function omit<T extends object, K extends keyof T>(
  object: T,
  paths?: K[]
): Omit<T, K>

export function omit<T>(obj: T, paths?: string[]): Partial<T>

export function omit(obj: object, paths: string[] = []) {
  if (!obj) {
    return {}
  }
  return paths.reduce(
    (acc, key) => {
      delete acc[key]
      return acc
    },
    { ...obj } as any
  )
}
