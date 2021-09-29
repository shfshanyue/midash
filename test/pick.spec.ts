import { pick } from '../src';

describe('pick', function() {
  const object = { a: 1, b: 2, c: 3, d: 4 };

  it('should work', function() {
    const actual = pick(object, ['a', 'c', 'z']);

    expect(actual).toEqual({ a: 1, c: 3 });
  });

  it('should work with second arguments', function() {
    const actual = pick(object);

    expect(actual).toEqual({});
  });
});
