const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

/**
 * Given a sorted array of integers, write a function called `search`,
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return `-1`.
 *
 * search([1, 2, 3, 4, 5, 6], 4); // 3
 * search([1, 2, 3, 4, 5, 6], 6); // 5
 * search([1, 2, 3, 4, 5, 6], 11); // -1
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

(function run() {
  const r = search([1, 2, 3, 4, 5, 6], 4);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
