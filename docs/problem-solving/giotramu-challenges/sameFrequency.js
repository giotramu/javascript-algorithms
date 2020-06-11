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

module.exports = sameFrequency;
