export function sample<T>(list: T[]) {
  const len = list.length
  return len ? list[Math.floor(Math.random() * len)] : undefined
}
