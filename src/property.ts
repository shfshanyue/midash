import { get } from './get'

type PropertyFunction<T> = (obj: T) => any;

export function property<T>(path: Array<string | number> | string): PropertyFunction<T> {
  return (obj: T) => get(obj as Record<string, any>, path as string | string[] | number[]); 
}
