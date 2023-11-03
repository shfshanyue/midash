export function assign<T extends {}, U>(target: T, source: U): T & U
export function assign<T extends {}, U, V>(
  target: T,
  source1: U,
  source2: V
): T & U & V
export function assign<T extends {}, U, V, W>(
  target: T,
  source1: U,
  source2: V,
  source3: W
): T & U & V & W

export function assign(target: object, ...sources: any[]): any {
  if (target === null || target === undefined) {
    target = {}
  }
  return Object.assign(target, ...sources)
}
