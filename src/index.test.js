const memoize = require('./index');

const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const memoizedFilter = memoize((filters, id) => {
  return { items: filters.filter(item => item === id), timestamp: Date.now() };
});

describe('Test suit for memoize utility', () => {
  test('Should return initial value of memoize', () => {
    const { items } = memoizedFilter(arr, 1);
    expect(items).toEqual([1, 1]);
  });
  test('Should test evaluate of arguments havent changed', () => {
    const { items, timestamp } = memoizedFilter(arr, 1);
    expect(items).toEqual([1, 1]);
    const sameFilter = memoizedFilter(arr, 1);
    expect(sameFilter.items).toEqual([1, 1]);
    expect(sameFilter.timestamp).toEqual(timestamp);
  });

  test('Should test evaluate changed if arguments change', () => {
    const { items, timestamp } = memoizedFilter(arr, 1);
    expect(items).toEqual([1, 1]);
    const sameFilter = memoizedFilter(arr, 1);
    expect(sameFilter.items).toEqual([1, 1]);
    expect(sameFilter.timestamp).toEqual(timestamp);
    const newFilter = memoizedFilter(arr, 2);
    expect(newFilter.items).toEqual([2, 2]);
    expect(newFilter.timestamp).not.toEqual(timestamp);
  });
});
