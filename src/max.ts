export function max (list?: number[]) {
  if (!list || !list.length) {
    return
  }
  return list?.reduce((x, y) => x > y ? x : y)
}