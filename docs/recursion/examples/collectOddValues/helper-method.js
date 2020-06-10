const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function collectOddValues(arr) {
  const result = [];

  (function helper(value) {
    if (value.length === 0) {
      return;
    }

    if (value[0] % 2 !== 0) {
      result.push(value[0]);
    }

    helper(value.slice(1));
  })(arr);

  return result;
}

(function run() {
  const r = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
