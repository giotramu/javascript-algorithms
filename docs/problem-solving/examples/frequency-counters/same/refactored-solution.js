const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

module.exports = same;

/**
 * Write a function called `same` which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 */

// --- Time complexity O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (Object.prototype.hasOwnProperty.call(frequencyCounter1, key)) {
      const square = Math.pow(key, 2); // or `key ** 2`

      if (!(square in frequencyCounter2)) return false;

      if (frequencyCounter2[square] !== frequencyCounter1[key]) return false;
    }
  }

  return true;
}

// --- Timing
const r = same([1, 2, 3], [4, 1, 9]);
calcTimeElapsed(() => r);
