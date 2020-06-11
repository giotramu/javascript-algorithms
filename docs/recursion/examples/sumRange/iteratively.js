function sumRange(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total += i;
  }

  return total;
}

module.exports = sumRange;
