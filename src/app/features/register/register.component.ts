import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class RegisterComponent implements OnInit{
    isMobileView = false;
    registerDesktopComponent: any;
    registerMobileComponent: any;

    ngOnInit() {
        this.checkScreenSize();
        window.addEventListener('resize', () => this.checkScreenSize());
      }

    private async checkScreenSize() {
        const width = window.innerWidth;
        this.isMobileView = width < 768;
        
        // Carga el componente según el tamaño de pantalla - LAZY LOADING
        if (this.isMobileView) {
          if (!this.registerMobileComponent) {
            const { RegisterMobileComponent } = await import('./register-mobile/register-mobile.component');
            this.registerMobileComponent = RegisterMobileComponent;
          }
        } else {
          if (!this.registerDesktopComponent) {
            const { RegisterDesktopComponent } = await import('./register-desktop/register-desktop.component');
            this.registerDesktopComponent = RegisterDesktopComponent;
          }
        }
      }
    
    
}
