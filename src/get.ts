export function get<TObject extends object, TKey extends keyof TObject>(
  object: TObject,
  path: TKey | [TKey]
): TObject[TKey]
export function get<TObject extends object, TKey extends keyof TObject>(
  object: TObject | null | undefined,
  path: TKey | [TKey]
): TObject[TKey] | undefined
export function get<
  TObject extends object,
  TKey extends keyof TObject,
  TDefault
>(
  object: TObject | null | undefined,
  path: TKey | [TKey],
  defaultValue: TDefault
): Exclude<TObject[TKey], undefined> | TDefault
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1]
>(object: TObject, path: [TKey1, TKey2]): TObject[TKey1][TKey2]
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1]
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2]
): TObject[TKey1][TKey2] | undefined
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TDefault
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2],
  defaultValue: TDefault
): Exclude<TObject[TKey1][TKey2], undefined> | TDefault
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2]
>(object: TObject, path: [TKey1, TKey2, TKey3]): TObject[TKey1][TKey2][TKey3]
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2]
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3]
): TObject[TKey1][TKey2][TKey3] | undefined
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2],
  TDefault
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3],
  defaultValue: TDefault
): Exclude<TObject[TKey1][TKey2][TKey3], undefined> | TDefault
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2],
  TKey4 extends keyof TObject[TKey1][TKey2][TKey3]
>(
  object: TObject,
  path: [TKey1, TKey2, TKey3, TKey4]
): TObject[TKey1][TKey2][TKey3][TKey4]
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2],
  TKey4 extends keyof TObject[TKey1][TKey2][TKey3]
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3, TKey4]
): TObject[TKey1][TKey2][TKey3][TKey4] | undefined
export function get<
  TObject extends object,
  TKey1 extends keyof TObject,
  TKey2 extends keyof TObject[TKey1],
  TKey3 extends keyof TObject[TKey1][TKey2],
  TKey4 extends keyof TObject[TKey1][TKey2][TKey3],
  TDefault
>(
  object: TObject | null | undefined,
  path: [TKey1, TKey2, TKey3, TKey4],
  defaultValue: TDefault
): Exclude<TObject[TKey1][TKey2][TKey3][TKey4], undefined> | TDefault
export function get(
  object: null | undefined,
  path: string | number | string[] | number[]
): undefined
export function get(
  object: object,
  path: string | string[] | number[],
  defaultValue?: any
): any

export function get(
  obj: Record<string, any> | null | undefined,
  path: string | number | string[] | number[],
  defaultValue?: any
) {
  const paths = Array.isArray(path)
    ? path
    : String(path)
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/\["(\w+)"\]/g, '.$1')
        .replace(/\['(\w+)'\]/g, '.$1')
        .split('.')
  let result = obj
  for (const p of paths) {
    result = result?.[p]
    if (result === undefined) {
      return defaultValue
    }
  }
  return result
}
