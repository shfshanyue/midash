export function min (list?: number[]) {
  if (!list || !list.length) {
    return
  }
  return list?.reduce((x, y) => x < y ? x : y)
}