import { get } from './get'

export const property = (path: string | string[] | number[]) => (obj: any) =>
  get(obj, path)
