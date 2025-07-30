import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private balance: number = 1000;
  private history: string[] = [];

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    this.history.push(`Deposited $${amount}`);
  }

  withdraw(amount: number): string {
    if (amount > this.balance) {
      return 'Insufficient funds';
    }
    this.balance -= amount;
    this.history.push(`Withdrew $${amount}`);
    return 'Success';
  }

  getHistory(): string[] {
    return this.history;
  }
}
