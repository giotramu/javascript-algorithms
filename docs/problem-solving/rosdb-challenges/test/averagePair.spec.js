const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');
const averagePair = require('../averagePair');

test(`Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.`, () => {
  expect(averagePair([1, 2, 3], 2.5)).toBe(true);
  expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
  expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
  expect(averagePair([], 4)).toBe(false);
});

// --- Test the Time Complexity
const r = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
calcTimeElapsed(() => r); // O(n)
