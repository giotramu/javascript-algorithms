const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    // eslint-disable-next-line no-console
    console.log(i);
  }
}

(function run() {
  const r = logAtLeast5(5);
  calcTimeElapsed(() => r);
})();
