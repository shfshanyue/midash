import { keyBy } from '../src';

describe('groupBy', function() {
  const list = [
    { id: 1, name: 'shuifeng' },
    { id: 2, name: 'shanyue' },
  ];

  it('should work', function() {
    const actual = keyBy(list, x => x.id);
    expect(actual).toEqual({
      1: {
        id: 1,
        name: 'shuifeng',
      },
      2: {
        id: 2,
        name: 'shanyue',
      },
    });
  });
});
