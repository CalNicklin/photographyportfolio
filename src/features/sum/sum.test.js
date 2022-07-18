const sum = require('./sum');

test('multiplies 1 * 2 to equal 2', () => {
  expect(sum(1, 2)).toBe(2);
});