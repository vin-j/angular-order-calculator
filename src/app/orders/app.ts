import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, Order } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,      // Add this for standalone components
  imports: [CommonModule],
  templateUrl: './index.html',
})
export class OrdersComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }
}
