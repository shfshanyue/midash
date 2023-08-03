export function once(fn: Function) {
  let called = false;
  return function () {
    if (!called) {
      called = true;
      return fn(...arguments);
    }
  }
}