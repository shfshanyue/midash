import { nthBy } from '../src'

describe('min', function () {
  const list = [
    { user: 'barney', age: 36, active: true },
    { user: 'fred', age: 40, active: false },
    { user: 'travis', age: 37, active: true }
  ];

  it('should work', function () {
    expect(nthBy(list, item => item.active)).toEqual({ user: 'barney', age: 36, active: true })
  })
})