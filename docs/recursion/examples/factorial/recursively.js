const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

(function run() {
  const r = factorial(5);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
