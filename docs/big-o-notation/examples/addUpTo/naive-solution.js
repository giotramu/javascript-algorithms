const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

module.exports = addUpTo;

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

// --- Timing
const r = addUpTo(1000000000);
calcTimeElapsed(() => r);
