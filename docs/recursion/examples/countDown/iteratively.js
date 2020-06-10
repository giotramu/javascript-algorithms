const calcTimeElapsed = require('../../../_helpers/calcTimeElapsed');

function countDown(num) {
  for (let i = num; i > 0; i--) {
    // eslint-disable-next-line no-console
    console.log(i);
  }

  // eslint-disable-next-line no-console
  console.log('All done');
}

(function run() {
  const r = countDown(10);
  calcTimeElapsed(() => r);
})();
