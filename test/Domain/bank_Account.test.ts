import { Bank_Account } from "../../src/Domain/Entity/bank_Account";
import { Saving_Account } from "../../src/Domain/Entity/saving_Account";
import { Transaction } from "../../src/Domain/Entity/transaction";
import { Current_Account } from "../../src/Domain/Entity/current_Account";

describe('Bank account tests', () => {

  let bank_Account: Bank_Account;

  describe('Saving account', () => {

    beforeEach(() => {
      bank_Account = new Saving_Account();
      bank_Account.number = '0000';
      bank_Account.city = 'Valledupar';
      bank_Account.ownerId = '1065';
      bank_Account.balance = 0;
    });

    test('Consign negative or zero', () => {
      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = -50000;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(0);
    });

    test('Correct consign', () => {
      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 50000;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(50000);
    });

    test('Wrong consign', () => {
      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 49950;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(0);
    });

    test('Next consign correct', () => {

      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 50000;
      bank_Account.consing(new_Transaction);
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 20000;
      bank_Account.remove(new_Transaction);
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 49950;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(79950);
    });

    test('Next consign correct, different city', () => {

      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 50000;
      bank_Account.consing(new_Transaction);
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 20000;
      bank_Account.remove(new_Transaction);
      new_Transaction.city = 'Bogota';
      new_Transaction.value = 49950;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(69950);
    });

  });

  describe('Current account', () => {

    beforeEach(() => {
      bank_Account = new Current_Account();
      bank_Account.number = '0000';
      bank_Account.city = 'Valledupar';
      bank_Account.ownerId = '1066';
      bank_Account.balance = 0;
    });

    test('Consign negative or zero', () => {
      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = -50000;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(0);
    });

    test('Correct consign', () => {
      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 500000;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(500000);
    });

    test('Wrong consign', () => {
      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 99950;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(0);
    });

    test('Next consign correct', () => {

      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 500000;
      bank_Account.consing(new_Transaction);
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 200000;
      bank_Account.remove(new_Transaction);
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 499950;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(799950);
    });

    test('Next consign correct, different city', () => {

      const new_Transaction: Transaction = new Transaction();
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 500000;
      bank_Account.consing(new_Transaction);
      new_Transaction.city = 'Valledupar';
      new_Transaction.value = 200000;
      bank_Account.remove(new_Transaction);
      new_Transaction.city = 'Bogota';
      new_Transaction.value = 499950;
      bank_Account.consing(new_Transaction);
      expect(bank_Account.balance).toBe(799950);
    });

  });

});

