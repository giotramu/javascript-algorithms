const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');
const areThereDuplicates = require('../areThereDuplicates');

test(`Given a variable number of arguments, checks whether there are any duplicates among the arguments passed in`, () => {
  expect(areThereDuplicates(1, 2, 3)).toBe(false);
  expect(areThereDuplicates(1, 2, 2)).toBe(true);
  expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
});

// --- Test the Time Complexity
const r = areThereDuplicates(182, 281, 300);
calcTimeElapsed(() => r); // O(n)
