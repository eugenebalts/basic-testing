import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 5, b: 2, action: Action.Divide, expected: 2.5 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 7, b: 2, action: Action.Exponentiate, expected: 49 },
  { a: 8, b: 2, action: Action.Exponentiate, expected: 64 },
  { a: 9, b: 2, action: Action.Exponentiate, expected: 81 },
  { a: 10, b: 2, action: Action.Multiply, expected: 20 },
  { a: 11, b: 3, action: Action.Multiply, expected: 33 },
  { a: 12, b: 4, action: Action.Multiply, expected: 48 },
  { a: 13, b: 2, action: Action.Subtract, expected: 11 },
  { a: 14, b: 2, action: Action.Subtract, expected: 12 },
  { a: 15, b: 2, action: Action.Subtract, expected: 13 },
];

describe('simpleCalculator', () => {
  testCases.forEach((suite) => {
    const { a, b, action, expected } = suite;

    const testSuite = simpleCalculator({ a, b, action });

    test(`should return ${expected} with argument a:${a}, b:${b} and action=${action}`, () => {
      expect(testSuite).toBe(expected);
    });
  });
});
