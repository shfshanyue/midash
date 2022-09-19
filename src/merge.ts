import { isPlainObject } from './isPlainObject'
import { isArray } from './isArray'

const isArrayOrPlainObject = (o?: any) => isPlainObject(o) || isArray(o)

export function merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
export function merge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
export function merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
export function merge(object: any, ...sources: any[]): any {
  if (sources.length === 1 && (!isArrayOrPlainObject(sources[0]) || !isArrayOrPlainObject(object))) {
    if (sources[0] === undefined) {
      return object
    }
    return sources[0]
  }
  for (const source of sources) {
    if (!isArrayOrPlainObject(source)) {
      object = merge(object, source)
    } else {
      for (const key of Object.keys(source)) {
        (object as any)[key] = merge((object as any)[key], source[key])
      }
    }
  }
  return object
}