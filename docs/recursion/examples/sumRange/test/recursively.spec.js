const sumRange = require('../recursively');

test(`Sum range.`, () => {
  expect(sumRange(5)).toBe(15);
});
