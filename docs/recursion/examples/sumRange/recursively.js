const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

(function run() {
  const r = sumRange(5);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
