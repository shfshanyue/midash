export function memoize<T extends any[]>(fn: (...args: T) => any) {
  let cache: { [key: string]: any } = {};
  return (...args: T) => {
    let key = args[0];
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}