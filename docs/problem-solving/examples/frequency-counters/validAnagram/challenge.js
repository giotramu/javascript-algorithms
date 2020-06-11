const calcTimeElapsed = require('../../../../_helpers/calcTimeElapsed');

module.exports = validAnagram;

/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
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

// --- Timing
const r = validAnagram('anagrams', 'nagaramm');
calcTimeElapsed(() => r);
