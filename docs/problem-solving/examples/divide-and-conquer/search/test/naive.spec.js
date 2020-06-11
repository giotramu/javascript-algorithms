const calcTimeElapsed = require('../../../../../_helpers/calcTimeElapsed');
const search = require('../naive-solution');

test(`Accepts a value and returns the index where the value passed to the function is located.`, () => {
  expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  expect(search([1, 2, 3, 4, 5, 6], 6)).toBe(5);
});

test(`If the value is not found, return '-1'`, () => {
  expect(search([1, 2, 3, 4, 5, 6], 11)).toBe(-1);
});

// --- Test the Time Complexity
const r = search([1, 2, 3, 4, 5, 6], 4);
calcTimeElapsed(() => r); // O(n) / Linear search
