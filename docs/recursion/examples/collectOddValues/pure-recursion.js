const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function collectOddValues(arr) {
  const result = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  const recursion = collectOddValues(arr.slice(1));
  return result.concat(recursion);
}

(function run() {
  const r = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // eslint-disable-next-line no-console
  console.log('Result: ', r);

  calcTimeElapsed(() => r);
})();
