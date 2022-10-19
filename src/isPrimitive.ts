import { isObject } from './isObject'

export function isPrimitive(value?: any) {
  return !isObject(value)
}