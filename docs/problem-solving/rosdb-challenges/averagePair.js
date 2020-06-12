function averagePair(arr, average) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    const sumAverage = sum / 2;

    if (sumAverage === average) {
      return true;
    } else if (sumAverage < average) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

module.exports = averagePair;
