const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

module.exports = maxSubArraySum;

/**
 * Write a function called `maxSubarraySum` which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

// --- Time complexity O(n)
function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// --- Timing
const r = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);
calcTimeElapsed(() => r);
