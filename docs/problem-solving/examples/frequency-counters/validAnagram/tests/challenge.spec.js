const calcTimeElapsed = require('../../../../../_helpers/calcTimeElapsed');
const validAnagram = require('../challenge');

test(`Given two strings, write a function to determine if the second string is an anagram of the first.`, () => {
  expect(validAnagram('', '')).toBe(true);
  expect(validAnagram('aaz', 'zza')).toBe(false);
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
  expect(validAnagram('rat', 'car')).toBe(false);
  expect(validAnagram('awesome', 'awesom')).toBe(false);
  expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
});

// --- Test the Time Complexity
const r = validAnagram('anagrams', 'nagaramm');
calcTimeElapsed(() => r); // O(n)
