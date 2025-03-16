import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class LoginComponent implements OnInit {
  isMobileView: boolean = false;
  loginDesktopComponent: any;
  loginMobileComponent: any;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  private async checkScreenSize() {
    const width = window.innerWidth;
    this.isMobileView = width < 768;
    
    // Carga el componente según el tamaño de pantalla - LAZY LOADING
    if (this.isMobileView) {
      if (!this.loginMobileComponent) {
        const { LoginMobileComponent } = await import('./login-mobile/login-mobile.component');
        this.loginMobileComponent = LoginMobileComponent;
      }
    } else {
      if (!this.loginDesktopComponent) {
        const { LoginDesktopComponent } = await import('./login-desktop/login-desktop.component');
        this.loginDesktopComponent = LoginDesktopComponent;
      }
    }
  }
}
