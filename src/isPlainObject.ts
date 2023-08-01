import { isObject } from './isObject'

export function isPlainObject(value?: any) {
  if (!isObject(value)) {
    return false
  }

  // if Object.create(null)
  if (Object.getPrototypeOf(value) === null) { 
    return true
  }

  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(value) === proto
}