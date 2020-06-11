const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

module.exports = maxSubArraySum;

/**
 * Write a function called `maxSubarraySum` which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

// --- Time complexity O(n^2)
function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

// --- Timing
const r = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);
calcTimeElapsed(() => r);
