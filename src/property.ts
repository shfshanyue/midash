type PropertyPath = string | number | symbol;

export function property<T extends object, K extends PropertyPath>(path: K) {
  return (obj: T) => {
    const keys = String(path).split('.');
    let result: any = obj;
    
    for (const key of keys) {
      result = result?.[key];
    }
    
    return result;
  };
}