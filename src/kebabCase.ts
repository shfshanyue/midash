import { words } from './words'

export function kebabCase(str: string) {
  return words(str).join('-')
}
