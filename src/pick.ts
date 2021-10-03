export function pick<T extends object, K extends keyof T>(
  object: T,
  paths?: K[]
): Pick<T, K>

export function pick<T>(obj: T, paths?: string[]): Partial<T>

export function pick(obj: object, paths: string[] = []) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => paths.includes(key))
  )
}
