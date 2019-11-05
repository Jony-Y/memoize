const shallowEqual = (newVal, oldVal) => newVal === oldVal;
const simpleEqual = (newArgs = [], oldArgs = []) =>
  newArgs.length === oldArgs.length &&
  newArgs.every((arg, index) => shallowEqual(arg, oldArgs[index]));

/**
 * Memoize function to store previous value
 * @param fn  {Function} call back function to call and check memoize change
 * @param equalizer {Function}  Custom Equal function - defaults to shallow equals
 * @return {Function}
 */
module.exports = (fn, equalizer = simpleEqual) => {
  let cachedArgs = [];
  let lastValue;
  let isFirstCall = true;
  return (...args) => {
    if (!isFirstCall && equalizer(args, cachedArgs)) {
      return lastValue;
    }
    lastValue = fn(...args);
    cachedArgs = args;
    isFirstCall = false;
    return lastValue;
  };
};
