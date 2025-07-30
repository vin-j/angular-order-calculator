import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankService } from '../services/bank.service';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './index.html',
})
export class BankComponent {
  amount: number = 0;
  message: string = '';

  constructor(public bank: BankService) { }

  deposit() {
    if (this.amount > 0) {
      this.bank.deposit(this.amount);
      this.message = `Deposited $${this.amount}`;
      this.amount = 0;
    } else {
      this.message = 'Enter a positive amount';
    }
  }

  withdraw() {
    if (this.amount > 0) {
      const result = this.bank.withdraw(this.amount);
      this.message = result === 'Success' ? `Withdrew $${this.amount}` : result;
      this.amount = 0;
    } else {
      this.message = 'Enter a positive amount';
    }
  }
}
