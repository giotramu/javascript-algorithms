/* eslint-disable no-console */

import {performance} from 'perf_hooks';

(function run() {
  const T1 = performance.now();
  const R = addUpTo(1000000000);
  const T2 = performance.now();

  console.log(`Result: ${R}`);
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);

  function addUpTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
      total += i;
    }

    return total;
  }
})();
