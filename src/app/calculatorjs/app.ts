import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './index.html',
  styleUrls: ['../../styles.css']
})
export class CalculatorjsComponent {
  result: string = '';

  appendValue(value: string) {
    this.result += value;
  }

  clearResult() {
    this.result = '';
  }

  calculateResult() {
    try {
      // Use Function constructor to safely evaluate expressions
      this.result = new Function('return ' + this.result)().toString();
    } catch {
      alert('Invalid input');
      this.clearResult();
    }
  }
}
