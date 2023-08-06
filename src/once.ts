export function once<T extends any[]>(fn: (...args: T) => any) {
  let called = false;
  return (...args: T) => {
    if (!called) {
      called = true;
      return fn(...args);
    }
  }
}