/**
 * Write a function called `sameFrequency`.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * sameFrequency(182, 281); // true
 * sameFrequency(34, 14); // false
 * sameFrequency(3589578, 5879385); // true
 * sameFrequency(22, 222); // false
 *
 */

// --- Time complexity O(n)
function sameFrequency(int1, int2) {
  const sInt1 = int1.toString();
  const sInt2 = int2.toString();

  if (sInt1.length !== sInt2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of sInt1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (const val of sInt2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (const key in sInt1) {
    if (Object.prototype.hasOwnProperty.call(sInt1, key)) {
      if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
  }

  return true;
}

(function run() {
  // TODO: Replace with test runner library
  const tests = [
    sameFrequency(182, 281), // true
    sameFrequency(34, 14), // false
    sameFrequency(3589578, 5879385), // true
    sameFrequency(22, 222) // false
  ];

  // eslint-disable-next-line no-console
  tests.forEach((test, i) => console.log(`Test ${i + 1}:`, test));
})();
