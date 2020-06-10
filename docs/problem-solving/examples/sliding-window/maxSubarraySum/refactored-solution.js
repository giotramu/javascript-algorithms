const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

/**
 * Write a function called `maxSubarraySum` which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 *
 * maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
 * maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
 * maxSubarraySum([4, 2, 1, 6], 1); // 6
 * maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
 * maxSubarraySum([], 4); // null
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

(function run() {
  const r = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
