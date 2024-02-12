// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from './index';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initBalance = 999;
    const newBankAccount = getBankAccount(initBalance);

    expect(newBankAccount.getBalance()).toBe(initBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const newBankAccount = getBankAccount(100);

    expect(() => newBankAccount.withdraw(999)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const firstAccount = getBankAccount(100);
    const secondAccount = getBankAccount(100);

    expect(() => firstAccount.transfer(200, secondAccount)).toThrowError(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(100);

    expect(() => account.transfer(200, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    const account = getBankAccount(100);
    account.deposit(200);

    expect(account.getBalance()).toBe(300);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(300);
    account.withdraw(100);

    expect(account.getBalance()).toBe(200);
  });

  test('should transfer money', () => {
    const firstAccount = getBankAccount(100);
    const secondAccount = getBankAccount(0);

    firstAccount.transfer(50, secondAccount);

    expect(firstAccount.getBalance()).toBe(50);
    expect(secondAccount.getBalance()).toBe(50);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const account = getBankAccount(999);
    const fetchedBalance = await account.fetchBalance();

    expect(typeof fetchedBalance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const account = getBankAccount(999);
    await account.synchronizeBalance();
    expect(typeof account.getBalance()).toBe('number');
  });
  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const account = getBankAccount(1);
    await expect(account.synchronizeBalance()).rejects.toThrowError(
      SynchronizationFailedError,
    );
  });
});
