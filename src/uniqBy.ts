export function uniqBy<T>(
  list: T[],
  by: (value: T) => unknown
): T[] {
  const uniqMap: { [key: string]: T } = {};
  if (list != null && list.length > 0) {
    list.forEach(item => {
      const key = by(item) as unknown as string;
      if (!uniqMap[key]) {
        uniqMap[key] = item;
      }
    });
    return Object.values(uniqMap);
  } else {
    return [];
  }
}
