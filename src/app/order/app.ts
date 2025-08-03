import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for *ngFor, *ngIf

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],  // import common directives like *ngFor, *ngIf
  templateUrl: './index.html',
  styleUrls: ['../../styles.css']
})
export class OrderComponent {
  products: Product[] = [
    { name: 'Apple', price: 1 },
    { name: 'Banana', price: 1.5 },
    { name: 'Orange', price: 2 },
  ];

  order: Product[] = [];

  addToOrder(product: Product) {
    this.order.push(product);
  }

  get total(): number {
    return this.order.reduce((sum, item) => sum + item.price, 0);
  }
}
