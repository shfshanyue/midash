import { kebabCase } from '../src'

describe('kebabCase', function() {
  it('should work', function() {
    expect(kebabCase('foo')).toEqual('foo')
    expect(kebabCase('foo-bar')).toEqual('foo-bar')
    expect(kebabCase('foo--bar')).toEqual('foo-bar')
    expect(kebabCase('--foo--bar')).toEqual('foo-bar')
    expect(kebabCase('FOO-BAR')).toEqual('foo-bar')
    expect(kebabCase('-foo-bar-')).toEqual('foo-bar')
    expect(kebabCase('--foo--bar--')).toEqual('foo-bar')
    expect(kebabCase('foo.bar')).toEqual('foo-bar')
    expect(kebabCase('foo..bar')).toEqual('foo-bar')
    expect(kebabCase('..foo..bar..')).toEqual('foo-bar')
    expect(kebabCase('  foo  bar  ')).toEqual('foo-bar')
  })
})
