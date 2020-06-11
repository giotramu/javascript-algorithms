const collectOddValues = require('../helper-method');

test(`Collect odd values.`, () => {
  expect(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([
    1,
    3,
    5,
    7,
    9
  ]);
});
