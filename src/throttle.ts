export function throttle<T extends any[]>(
  f: (...args: T) => any,
  wait: number
) {
  let timer: number | null
  return (...args: T) => {
    if (timer) {
      return
    }
    timer = (setTimeout(() => {
      f(...args)
      timer = null
    }, wait) as any) as number
  }
}
