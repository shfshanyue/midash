export function memorize(fn: Function) {
  let cache: { [key: string]: any } = {};
  return function (...args: any[]) {
    let key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      let result = fn(args);
      cache[key] = result;
      return result;
    }
  };
}