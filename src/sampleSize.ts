export function sampleSize<T>(list: T[], n: number = 1) {
  if (n <= 0 || Number.isNaN(n)) {
    return [];
  }
  const result = [...list];
  const len = result.length;
  n = n > len ? len : n;
  for (let i = len - 1; i >= len - n; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [result[i], result[rand]] = [result[rand], result[i]];
  }
  return result.slice(-n);
}
