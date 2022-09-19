import { isObject } from './isObject'

export function isPlainObject(value?: any) {
  if (!isObject(value)) {
    return false
  }

  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(value) === proto
}