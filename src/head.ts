export function head<T>(list?: T[]): T | undefined {
  return list?.[0]
}

export function tail<T>(list?: T[]): T[] {
  return list?.slice(1) ?? []
}

export function take<T>(list?: T[], n = 1): T[] {
  return list?.slice(0, n) ?? []
}
