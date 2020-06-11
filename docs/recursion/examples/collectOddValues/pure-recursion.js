function collectOddValues(arr) {
  const result = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  const recursion = collectOddValues(arr.slice(1));
  return result.concat(recursion);
}

module.exports = collectOddValues;
