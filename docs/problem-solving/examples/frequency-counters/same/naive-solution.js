const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

module.exports = same;

/**
 * Write a function called `same` which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 */

// --- Time complexity O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const square = Math.pow(arr1[i], 2); // or `arr1[i] ** 2`
    const correctIndex = arr2.indexOf(square);

    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
}

// --- Timing
const r = same([1, 2, 3], [4, 1, 9]);
calcTimeElapsed(() => r);
