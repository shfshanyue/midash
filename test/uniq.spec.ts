import { uniq } from '../src';

describe('sampleSize', function() {
  const list = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];

  it('should work', function() {
    const actual = uniq(list);

    expect(actual).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
