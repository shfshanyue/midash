import { isObject } from './isObject'

export function isPromise<T = any>(value?: any): value is Promise<T> {
  return isObject(value) && typeof (value as any).then === 'function'
}
