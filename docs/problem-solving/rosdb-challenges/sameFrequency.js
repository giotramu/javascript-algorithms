function sameFrequency(int1, int2) {
  if (int1 === int2) return true;

  const int1Str = int1.toString();
  const int2Str = int2.toString();

  if (int1Str.length !== int2Str.length) return false;

  const lookup = {};

  for (let i = 0; i < int1Str.length; i++) {
    const num = int1Str[i];

    if (lookup[num]) {
      lookup[num] += 1;
    } else {
      lookup[num] = 1;
    }
  }

  for (let i = 0; i < int2Str.length; i++) {
    const num = int2Str[i];

    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }

  return true;
}

module.exports = sameFrequency;
