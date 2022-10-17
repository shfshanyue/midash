export function pick<T extends object, K extends keyof T>(
  object: T,
  paths?: K[]
): Pick<T, K>

export function pick<T>(obj: T, paths?: string[]): Partial<T>

export function pick(obj: object, paths: string[] = []) {
  if (!obj) {
    return {}
  }
  return paths.reduce((acc, key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      acc[key] = (obj as any)[key]
    }
    return acc
  }, {} as any)
}
