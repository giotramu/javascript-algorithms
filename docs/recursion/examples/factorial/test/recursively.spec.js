const factorial = require('../recursively');

test(`Factorial.`, () => {
  expect(factorial(5)).toBe(120);
});
