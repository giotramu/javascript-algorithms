const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

module.exports = search;

/**
 * Given a sorted array of integers, write a function called search,
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return `-1`.
 */

// --- Time complexity Log(n) / Binary search
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const current = arr[middle];

    if (current < val) {
      min = middle + 1;
    } else if (current > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// --- Timing
const r = search([1, 2, 3, 4, 5, 6], 4);
calcTimeElapsed(() => r);
