const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');
const areThereDuplicates = require('../../areThereDuplicates/solution-1');

test(`
  Accepts a variable number of arguments,
  and checks whether there are any duplicates among the arguments passed in.
  `, () => {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
});

test(`Returns 'false' if no arguments are passed.`, () => {
  expect(areThereDuplicates()).toBe(false);
});

// --- Test the Time Complexity
const r = areThereDuplicates('a', 'b', 'c', 'a');
calcTimeElapsed(() => r); // O(n)
