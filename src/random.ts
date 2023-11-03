export function random(lower?: number, upper?: number) {
  if (lower === undefined) {
    ;[lower, upper] = [0, 1]
  }
  if (upper === undefined) {
    ;[lower, upper] = [0, lower]
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}
