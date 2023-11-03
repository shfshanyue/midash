import { camelCase } from '../src'

describe('camelCase', function () {
  it('should work', function () {
    expect(camelCase('foo')).toEqual('foo')
    expect(camelCase('foo-bar')).toEqual('fooBar')
    expect(camelCase('foo--bar')).toEqual('fooBar')
    expect(camelCase('--foo--bar')).toEqual('fooBar')
    expect(camelCase('FOO-BAR')).toEqual('fooBar')
    expect(camelCase('-foo-bar-')).toEqual('fooBar')
    expect(camelCase('--foo--bar--')).toEqual('fooBar')
    expect(camelCase('foo.bar')).toEqual('fooBar')
    expect(camelCase('foo..bar')).toEqual('fooBar')
    expect(camelCase('..foo..bar..')).toEqual('fooBar')
    expect(camelCase('  foo  bar  ')).toEqual('fooBar')
  })
})
