export function isObject(value?: any): value is object {
  return (typeof value === 'object' || typeof value === 'function') && value !== null
}