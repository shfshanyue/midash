type TypedArray =
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array
  | Int8Array
  | Int16Array
  | Int32Array
  | BigUint64Array
  | BigInt64Array
  | Float32Array
  | Float64Array

export function isTypedArray<T extends TypedArray = TypedArray>(
  value?: any
): value is T {
  return value.length !== undefined && ArrayBuffer.isView(value)
}
