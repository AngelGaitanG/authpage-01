import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './shared/components/header-nav/header-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auth-page-01';
}
