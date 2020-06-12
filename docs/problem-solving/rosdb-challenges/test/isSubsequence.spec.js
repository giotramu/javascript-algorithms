const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');
const isSubsequence = require('../isSubsequence');

test(`Given two strings, checks whether the characters in the first string form a subsequence of the characters in the second string, without their order changing.`, () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true);
  expect(isSubsequence('sing', 'sting')).toBe(true);
  expect(isSubsequence('abc', 'abracadabra')).toBe(true);
  expect(isSubsequence('abc', 'acb')).toBe(false);
});

// --- Test the Time Complexity
const r = isSubsequence('abc', 'abracadabra');
calcTimeElapsed(() => r); // O(n)
