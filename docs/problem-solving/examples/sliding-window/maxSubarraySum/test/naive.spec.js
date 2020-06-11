const calcTimeElapsed = require('../../../../../_helpers/calcTimeElapsed');
const maxSubarraySum = require('../naive-solution');

test(`The function should calculate the maximum sum of n consecutive elements in the array.`, () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
  expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
  expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
  expect(maxSubarraySum([], 4)).toBeNull();
});

// --- Test the Time Complexity
const r = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);
calcTimeElapsed(() => r); // O(n^2)
