export function omit<T extends object, K extends keyof T>(
  object: T,
  paths?: K[]
): Omit<T, K>;

export function omit<T>(obj: T, paths?: string[]): Partial<T>;

export function omit(obj: object, paths: string[] = []) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !paths.includes(key))
  );
}
