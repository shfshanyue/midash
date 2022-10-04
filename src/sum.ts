export function sum(list?: number[]) {
  return (list || []).reduce((x, y) => x + y, 0)
}