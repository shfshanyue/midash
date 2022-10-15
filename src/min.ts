export function min (list?: number[]) {
  return list?.reduce((x, y) => x < y ? x : y)
}