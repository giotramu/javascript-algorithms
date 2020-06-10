const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function sumRange(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total += i;
  }

  return total;
}

(function run() {
  const r = sumRange(5);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
