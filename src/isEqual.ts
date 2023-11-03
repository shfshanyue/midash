import { isTypedArray } from './isTypedArray'

export function isEqual(value: any, other: any): boolean {
  if (value === other) {
    return true
  }

  if (
    !(value && other && typeof value === 'object' && typeof other === 'object')
  ) {
    // isNaN
    return value !== other && other !== other
  }

  if (value.constructor !== other.constructor) {
    return false
  }

  // 因为二者 constructor 相同，因此只需要判断 value 的数据类型
  if (Array.isArray(value)) {
    if (value.length !== other.length) {
      return false
    }

    return value.every((x, i) => {
      return isEqual(x, other[i])
    })
  }

  if (isTypedArray(value)) {
    if (value.length !== other.length) {
      return false
    }

    return value.every((x, i) => x === other[i])
  }

  if (value.constructor === RegExp) {
    return value.source === other.source && value.flags === other.flags
  }

  if (value instanceof Map) {
    if (value.size !== other.size) {
      return false
    }
    for (const x of value.keys()) {
      if (!other.has(x)) {
        return false
      }
    }
    for (const [k, v] of Object.entries(value)) {
      if (!isEqual(v, other.get(k))) {
        return false
      }
    }
    return true
  }

  if (value instanceof Set) {
    if (value.size !== other.size) {
      return false
    }
    for (const x of value.keys()) {
      if (!other.has(x)) {
        return false
      }
    }
    return true
  }

  const keys = Object.keys(value)
  const otherKeys = Object.keys(other)

  if (keys.length !== otherKeys.length) {
    return false
  }

  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(other, key)) {
      return false
    }
  }

  for (const key of keys) {
    if (!isEqual(value[key], other[key])) {
      return false
    }
  }

  return true
}
