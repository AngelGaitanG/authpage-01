import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-desktop',
  templateUrl: './login-desktop.component.html',
  styleUrls: ['./login-desktop.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class LoginDesktopComponent implements OnInit {
  isMobileView: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => this.checkScreenSize());
  }
}
