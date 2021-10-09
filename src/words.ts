export function words(str: string) {
  return str
    .replace(/[A-Z]+/g, x => `.${x.toLowerCase()}`)
    .replace(/[^\w]+/g, '.')
    .split('.')
    .filter(Boolean)
}
