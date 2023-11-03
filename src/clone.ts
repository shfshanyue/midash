import { isArray } from './isArray'
import { isPlainObject } from './isPlainObject'
import { isPrimitive } from './isPrimitive'

export function clone<T>(obj: T): T {
  if (isPrimitive(obj)) {
    return obj
  }
  if (isArray(obj)) {
    return [...(obj as any)] as T
  }
  if (isPlainObject(obj)) {
    return {
      ...obj,
    }
  }
  // TODO: Date/Buffer/Regexp
  return obj
}

export function cloneDeep<T extends object>(obj: T): T {
  if (!isArray(obj) && !isPlainObject(obj)) {
    return clone(obj)
  }
  if (isArray(obj)) {
    return (obj as any).map((x: any) => cloneDeep(x))
  }
  return Object.keys(obj).reduce((acc, key) => {
    let value = (obj as any)[key]
    if (!isPrimitive(value)) {
      value = cloneDeep(value)
    }
    return {
      ...acc,
      [key]: value,
    }
  }, {} as T)
}
