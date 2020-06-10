const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function countDown(num) {
  let count = num;

  if (count <= 0) {
    // eslint-disable-next-line no-console
    console.log('All done!');
    return;
  }

  // eslint-disable-next-line no-console
  console.log(count);
  count--;
  countDown(count);
}

(function run() {
  const r = countDown(10);
  calcTimeElapsed(() => r);
})();
