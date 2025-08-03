import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService, Order } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,      // Add this for standalone components
  imports: [CommonModule],
  templateUrl: './index.html',
  styleUrls: ['../../styles.css']
})
export class OrdersComponent {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });

  }

  currentPage = 1;
  pageSize = 1;

  get totalPages(): number {
    return Math.ceil(this.orders.length / this.pageSize);
  }

  get paginatedOrders() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.orders.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}


