const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

module.exports = logAtLeast5;

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    // eslint-disable-next-line no-console
    console.log(i);
  }
}

// --- Timing
const r = logAtLeast5(5);
calcTimeElapsed(() => r);
