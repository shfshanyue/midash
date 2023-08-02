export function castArray<T>(...args: T[]): T[] {
  if (!args.length) {
    return [];
  }
  const value = args[0];
  return Array.isArray(value) ? value : [value];
}