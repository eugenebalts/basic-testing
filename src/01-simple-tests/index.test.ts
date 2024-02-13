// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const sum = simpleCalculator({ a: 5, b: 3, action: Action.Add });

    expect(sum).toBe(8);
  });

  test('should subtract two numbers', () => {
    const subtract = simpleCalculator({ a: 5, b: 3, action: Action.Subtract });

    expect(subtract).toBe(2);
  });

  test('should multiply two numbers', () => {
    const mult = simpleCalculator({ a: 5, b: 3, action: Action.Multiply });

    expect(mult).toBe(15);
  });

  test('should divide two numbers', () => {
    const divide = simpleCalculator({ a: 6, b: 3, action: Action.Divide });

    expect(divide).toBe(2);
    // Write your test here
  });

  test('should exponentiate two numbers', () => {
    const exponent = simpleCalculator({
      a: 5,
      b: 3,
      action: Action.Exponentiate,
    });

    expect(exponent).toBe(125);
    // Write your test here
  });

  test('should return null for invalid action', () => {
    const suite = simpleCalculator({
      a: 5,
      b: 3,
      action: null,
    });

    expect(suite).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const suite = simpleCalculator({
      a: 'aboba',
      b: '2',
      action: Action.Divide,
    });

    expect(suite).toBe(null);
  });
});
