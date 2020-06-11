const calcTimeElapsed = require('../../../../../_helpers/calcTimeElapsed');
const sumZero = require('../naive-solution');

test(`
  The function should find the first pair where the sum is 0.
  Return an array that includes both values that sum to zero or undefined if a pair does not exist.
  `, () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);
  expect(sumZero([-2, 0, 1, 3])).toBeUndefined();
  expect(sumZero([1, 2, 3])).toBeUndefined();
});

// --- Test the Time Complexity
const r = sumZero([-3, -2, -1, 0, 1, 2, 3]);
calcTimeElapsed(() => r); // O(n^2)
