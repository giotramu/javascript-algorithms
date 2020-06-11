const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');
const sameFrequency = require('../sameFrequency');

test(`Given two positive integers, find out if the two numbers have the same frequency of digits.`, () => {
  expect(sameFrequency(182, 281)).toBe(true);
  expect(sameFrequency(34, 14)).toBe(false);
  expect(sameFrequency(3589578, 5879385)).toBe(true);
  expect(sameFrequency(22, 222)).toBe(false);
});

// --- Test the Time Complexity
const r = sameFrequency(182, 281);
calcTimeElapsed(() => r); // O(n)
