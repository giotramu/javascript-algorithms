import {performance} from 'perf_hooks';

/**
 * Write a function called `same` which accepts two arrays.
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same.
 *
 * same([1, 2, 3], [4, 1, 9]); // true
 * same([1, 2, 3], [1, 9]); // false
 * same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
 *
 */

// --- Time complexity O(n)
function validAnagram(first, second) {
  if (first.length !== second.length) return false;

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];

    // if letter exists, increment, otherwise set to 1
    if (lookup[letter]) {
      lookup[letter] += 1;
    } else {
      lookup[letter] = 1;
    }
  }

  // eslint-disable-next-line no-console
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    const letter = second[i];

    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

(function run() {
  const T1 = performance.now();
  const R = validAnagram('anagrams', 'nagaramm');
  const T2 = performance.now();

  // eslint-disable-next-line no-console
  console.log(`Result: ${R}`);

  // eslint-disable-next-line no-console
  console.log(`Time elapsed: ${(T1 - T2) / 1000} seconds.`);
})();
