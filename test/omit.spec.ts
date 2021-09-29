import { omit } from '../src';

describe('pick', function() {
  const object = { a: 1, b: 2, c: 3, d: 4 };

  it('should work', function() {
    const actual = omit(object, ['a', 'c', 'z']);

    expect(actual).toEqual({ b: 2, d: 4 });
  });

  it('should work with second arguments', function() {
    const actual = omit(object);

    expect(actual).toEqual(object);
  });
});
