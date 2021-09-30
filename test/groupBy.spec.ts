import { groupBy } from '../src';

describe('groupBy', function() {
  it('should work', function() {
    const actual = groupBy(['one', 'two', 'three'], x => x.length);
    expect(actual).toEqual({ '3': ['one', 'two'], '5': ['three'] });
  });

  it('should work with function', function() {
    const actual = groupBy([1.2, 3.4, 3.2], Math.floor);
    expect(actual).toEqual({ '1': [1.2], '3': [3.4, 3.2] });
  });
});
