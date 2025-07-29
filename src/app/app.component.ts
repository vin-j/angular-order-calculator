import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // <-- Required for <router-outlet>

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent { }
