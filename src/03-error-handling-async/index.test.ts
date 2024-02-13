import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'let me resolve you!';

    const suite = await resolveValue(value);

    expect(suite).toBe(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const msg = 'Im error. Throw me!';

    expect(() => throwError(msg)).toThrowError(msg);
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultMsg = 'Oops!';

    expect(() => throwError()).toThrowError(defaultMsg);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrowError(MyAwesomeError);
  });
});
