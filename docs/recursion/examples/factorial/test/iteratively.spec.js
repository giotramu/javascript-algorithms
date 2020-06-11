const factorial = require('../iteratively');

test(`Factorial.`, () => {
  expect(factorial(5)).toBe(120);
});
