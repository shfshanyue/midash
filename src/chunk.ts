export function chunk<T>(list: T[], size: number = 1): T[][] {
  const l: T[][] = [];
  for (let i = 0; i < list.length; i++) {
    const index = Math.floor(i / Math.floor(size));
    l[index] = l[index] || [];
    l[index].push(list[i]);
  }
  return l;
}
