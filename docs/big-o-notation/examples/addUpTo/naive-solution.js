const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

/**
 * Write a function called `addUpTo`,
 * that calculates the sum of all numbers from 1 up to (and including) some number n.
 */

// --- Time complexity O(n)
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

(function run() {
  const r = addUpTo(1000000000);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
