export function debounce<T extends any[]>(
  f: (...args: T) => any,
  wait: number
) {
  let timer: number
  return (...args: T) => {
    clearTimeout(timer)
    timer = (setTimeout(() => {
      f(...args)
    }, wait) as any) as number
  }
}
