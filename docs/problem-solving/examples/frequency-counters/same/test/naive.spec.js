const calcTimeElapsed = require('../../../../../_helpers/calcTimeElapsed');
const same = require('../naive-solution');

test(`
  Accepts two arrays.
  The function should return true if every value in the array has it's corresponding value squared in the second array.
 `, () => {
  expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
  expect(same([1, 2, 3], [1, 9])).toBe(false);
  expect(same([1, 2, 1], [4, 4, 1])).toBe(false); // must be same frequency
});

// --- Test the Time Complexity
const r = same([1, 2, 3], [4, 1, 9]);
calcTimeElapsed(() => r); // O(n^2)
