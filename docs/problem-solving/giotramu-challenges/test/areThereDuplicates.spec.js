/* eslint-disable camelcase */
const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');
const areThereDuplicates_1 = require('../areThereDuplicates/solution-1');
const areThereDuplicates_2 = require('../areThereDuplicates/solution-2');
const areThereDuplicates_3 = require('../areThereDuplicates/solution-3');

// --- Solution 1
test(`
  [Solution 1]
  Accepts a variable number of arguments,
  and checks whether there are any duplicates among the arguments passed in.
  `, () => {
  expect(areThereDuplicates_1(1, 2, 3)).toBe(false);
  expect(areThereDuplicates_1(1, 2, 2)).toBe(true);
  expect(areThereDuplicates_1('a', 'b', 'c', 'a')).toBe(true);
});

test(`[Solution 1] Returns 'false' if no arguments are passed.`, () => {
  expect(areThereDuplicates_1()).toBe(false);
});

// --- Solution 2
test(`
  [Solution 2]
  Accepts a variable number of arguments,
  and checks whether there are any duplicates among the arguments passed in.
  `, () => {
  expect(areThereDuplicates_2(1, 2, 3)).toBe(false);
  expect(areThereDuplicates_2(1, 2, 2)).toBe(true);
  expect(areThereDuplicates_2('a', 'b', 'c', 'a')).toBe(true);
});

test(`[Solution 2] Returns 'false' if no arguments are passed.`, () => {
  expect(areThereDuplicates_2()).toBe(false);
});

// --- Solution 3
test(`
  [Solution 3]
  Accepts a variable number of arguments,
  and checks whether there are any duplicates among the arguments passed in.
  `, () => {
  expect(areThereDuplicates_3(1, 2, 3)).toBe(false);
  expect(areThereDuplicates_3(1, 2, 2)).toBe(true);
  expect(areThereDuplicates_3('a', 'b', 'c', 'a')).toBe(true);
});

test(`[Solution 3] Returns 'false' if no arguments are passed.`, () => {
  expect(areThereDuplicates_3()).toBe(false);
});

// --- Test the Time Complexity
calcTimeElapsed(() => areThereDuplicates_1('a', 'b', 'c', 'a')); // O(n)
calcTimeElapsed(() => areThereDuplicates_2('a', 'b', 'c', 'a')); // O(n)
calcTimeElapsed(() => areThereDuplicates_3('a', 'b', 'c', 'a')); // O(n)
