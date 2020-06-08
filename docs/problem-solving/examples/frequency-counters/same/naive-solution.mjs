import {performance} from 'perf_hooks';

/**
 * Write a function called `same` which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 *
 * same([1, 2, 3], [4, 1, 9]); // true
 * same([1, 2, 3], [1, 9]); // false
 * same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
 *
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

(function run() {
  const T1 = performance.now();
  const R = same([1, 2, 3], [4, 1, 9]);
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
