import { Component } from '@angular/core';

@Component({
  selector: 'app-cache-demo',
  templateUrl: './index.html',
  styleUrls: ['../../styles.css']
})
export class CacheComponent {

  cacheData(): void {
    const user = { name: 'Vinay', role: 'Dev' };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Data cached!');
  }

  readCache(): void {
    const data = localStorage.getItem('user');
    alert(data ? `Cached: ${data}` : 'No cache found');
  }

  clearCache(): void {
    localStorage.removeItem('user');
    alert('Cache cleared');
  }
}
