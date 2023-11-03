import { snakeCase } from '../src'

describe('snakeCase', function () {
  it('should work', function () {
    expect(snakeCase('foo')).toEqual('foo')
    expect(snakeCase('foo-bar')).toEqual('foo_bar')
    expect(snakeCase('foo--bar')).toEqual('foo_bar')
    expect(snakeCase('--foo--bar')).toEqual('foo_bar')
    expect(snakeCase('FOO-BAR')).toEqual('foo_bar')
    expect(snakeCase('-foo-bar-')).toEqual('foo_bar')
    expect(snakeCase('--foo--bar--')).toEqual('foo_bar')
    expect(snakeCase('foo.bar')).toEqual('foo_bar')
    expect(snakeCase('foo..bar')).toEqual('foo_bar')
    expect(snakeCase('..foo..bar..')).toEqual('foo_bar')
    expect(snakeCase('  foo  bar  ')).toEqual('foo_bar')
  })
})
