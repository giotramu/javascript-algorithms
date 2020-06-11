function collectOddValues(arr) {
  const result = [];

  (function helper(value) {
    if (value.length === 0) {
      return;
    }

    if (value[0] % 2 !== 0) {
      result.push(value[0]);
    }

    helper(value.slice(1));
  })(arr);

  return result;
}

module.exports = collectOddValues;
