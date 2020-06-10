const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    // eslint-disable-next-line no-console
    console.log(i);
  }
}

(function run() {
  const r = logAtMost5(5);
  calcTimeElapsed(() => r);
})();
