export function random(
  lower: number,
  upper?: number,
) {
  if (!upper) {
    [lower, upper] = [0, lower]
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower
}
