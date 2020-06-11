const addUpTo = require('../naive-solution');

test(`Calculates the sum of all numbers from 1 up to (and including) some number n.`, () => {
  expect(addUpTo(5)).toBe(15);
});
