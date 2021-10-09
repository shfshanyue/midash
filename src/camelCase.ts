import { words } from './words'

export function camelCase(str: string) {
  return words(str)
    .map((word, i) => (i ? word[0].toUpperCase() + word.slice(1) : word))
    .join('')
}
