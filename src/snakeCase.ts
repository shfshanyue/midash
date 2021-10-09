import { words } from './words'

export function snakeCase(str: string) {
  return words(str).join('_')
}
