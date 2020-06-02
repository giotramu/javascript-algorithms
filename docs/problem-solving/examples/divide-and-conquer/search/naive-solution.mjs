import {performance} from 'perf_hooks';

/**
 * Given a sorted array of integers, write a function called search,
 * that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return `-1`.
 *
 * search([1, 2, 3, 4, 5, 6], 4); // 3
 * search([1, 2, 3, 4, 5, 6], 6); // 5
 * search([1, 2, 3, 4, 5, 6], 11); // -1
 */

// --- Time complexity O(n) / Linear search
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}

(function run() {
  const T1 = performance.now();
  const R = search([1, 2, 3, 4, 5, 6], 4);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
