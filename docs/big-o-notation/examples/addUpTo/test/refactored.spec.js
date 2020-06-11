const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');
const addUpTo = require('../refactored-solution');

test(`Calculates the sum of all numbers from 1 up to (and including) some number n.`, () => {
  expect(addUpTo(5)).toBe(15);
});

// --- Test the Time Complexity
const r = addUpTo(1000000000);
calcTimeElapsed(() => r); // O(1)
