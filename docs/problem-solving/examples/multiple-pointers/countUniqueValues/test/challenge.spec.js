const calcTimeElapsed = require('../../../../../_helpers/calcTimeElapsed');
const countUniqueValues = require('../challenge');

test(`Accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.`, () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  expect(countUniqueValues([])).toBe(0);
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
});

// --- Test the Time Complexity
const r = countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
calcTimeElapsed(() => r); // O(n)
