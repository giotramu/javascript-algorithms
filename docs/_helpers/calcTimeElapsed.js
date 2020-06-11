const {performance} = require('perf_hooks');

module.exports = function calcTimeElapsed(cbFn, showLog = false) {
  if (!showLog) return;

  const T1 = performance.now();
  cbFn();
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
};
