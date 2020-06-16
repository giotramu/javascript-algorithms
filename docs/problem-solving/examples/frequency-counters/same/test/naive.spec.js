const calcTimeElapsed = require('../../../../../_helpers/calcTimeElapsed');
const same = require('../naive-solution');

test(`
  Accepts two arrays.
  The function should return true if every value in the array has it's corresponding value squared in the second array.
 `, () => {
  expect(same([1, 2, 3], [4, 1, 9])).toBe(true);
  expect(same([1, 2, 3], [1, 9])).toBe(false);
  expect(same([1, 2, 1], [4, 4, 1])).toBe(false); // Must be same frequency
});

// --- Test the Time Complexity
calcTimeElapsed(() => same([1, 2, 3], [4, 1, 9])); // O(n^2)
