import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './index.html'
})
export class CalculatorComponent {
  num1 = 0;
  num2 = 0;
  operator = '+';
  result: number | string = '';

  calculate(n1: string, n2: string, op: string) {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    switch (op) {
      case '+': this.result = num1 + num2; break;
      case '-': this.result = num1 - num2; break;
      case '*': this.result = num1 * num2; break;
      case '/': this.result = num2 !== 0 ? num1 / num2 : 'Divide by 0'; break;
      default: this.result = 'Invalid';
    }
  }
}
