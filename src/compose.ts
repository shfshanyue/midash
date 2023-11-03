export function compose<T>(...funcs: Function[]): (...args: any[]) => T

export function compose(...funcs: Function[]) {
  return funcs.reduce(
    (a, b) =>
      (...args: any) =>
        a(b(...args)),
    (x: any) => x
  )
}

export { compose as flowRight }
