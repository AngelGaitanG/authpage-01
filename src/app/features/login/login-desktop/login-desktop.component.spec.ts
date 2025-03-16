import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDesktopComponent } from './login-desktop.component';

describe('LoginComponent', () => {
  let component: LoginDesktopComponent;
  let fixture: ComponentFixture<LoginDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
