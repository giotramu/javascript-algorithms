const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

/**
 * Write a function called `addUpTo`,
 * that calculates the sum of all numbers from 1 up to (and including) some number n.
 */

// --- Time complexity O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

(function run() {
  const r = addUpTo(1000000000);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
